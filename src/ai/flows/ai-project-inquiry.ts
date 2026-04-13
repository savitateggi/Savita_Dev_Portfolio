'use server';
/**
 * @fileOverview An AI agent that helps visitors find relevant projects based on their queries about skills or technologies.
 *
 * - aiProjectInquiry - A function that handles the project inquiry process.
 * - AIProjectInquiryInput - The input type for the aiProjectInquiry function.
 * - AIProjectInquiryOutput - The return type for the aiProjectInquiry function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ProjectSchema = z.object({
  title: z.string().describe('The title of the project.'),
  description: z.string().describe('A brief description of the project.'),
  technologies: z.array(z.string()).describe('List of technologies used in the project.'),
  skillsDemonstrated: z.array(z.string()).describe('List of skills demonstrated in the project.'),
  vercelLink: z.string().optional().describe('Optional Vercel deployment link for the project.'),
  githubLink: z.string().optional().describe('Optional GitHub repository link for the project.'),
});

const AIProjectInquiryInputSchema = z.object({
  query: z.string().describe("The user's question about skills or technologies (e.g., 'Show me projects using Python')."),
  projects: z.array(ProjectSchema).describe('A list of all available projects in the portfolio.'),
});
export type AIProjectInquiryInput = z.infer<typeof AIProjectInquiryInputSchema>;

const RelevantProjectOutputSchema = z.object({
  title: z.string().describe('The title of the relevant project.'),
  description: z.string().describe('A brief description of the project.'),
  technologies: z.array(z.string()).describe('List of technologies used in the project.'),
  skillsDemonstrated: z.array(z.string()).describe('List of skills demonstrated in the project.'),
  vercelLink: z.string().optional().describe('Optional Vercel deployment link for the project.'),
  githubLink: z.string().optional().describe('Optional GitHub repository link for the project.'),
  relevanceExplanation: z.string().describe('An AI-generated explanation of why this project is relevant to the user query.'),
});

const AIProjectInquiryOutputSchema = z.object({
  relevantProjects: z.array(RelevantProjectOutputSchema).describe('A list of projects deemed relevant to the user query, each with an explanation of its relevance.'),
});
export type AIProjectInquiryOutput = z.infer<typeof AIProjectInquiryOutputSchema>;

export async function aiProjectInquiry(input: AIProjectInquiryInput): Promise<AIProjectInquiryOutput> {
  return aiProjectInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiProjectInquiryPrompt',
  input: { schema: AIProjectInquiryInputSchema },
  output: { schema: AIProjectInquiryOutputSchema },
  prompt: `You are an AI assistant designed to help users find relevant projects from a portfolio based on their queries about skills or technologies.

User's Query: {{{query}}}

Here is a list of projects from the portfolio:
{{#each projects}}
Project Title: {{{title}}}
Description: {{{description}}}
Technologies Used: {{#each technologies}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Skills Demonstrated: {{#each skillsDemonstrated}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{#if vercelLink}}Vercel Link: {{{vercelLink}}}{{/if}}
{{#if githubLink}}GitHub Link: {{{githubLink}}}{{/if}}
---
{{/each}}

Based on the user's query, identify the most relevant projects. For each relevant project, provide a brief explanation (1-2 sentences) of why it is relevant to the query, specifically mentioning the skills or technologies in the query. If no projects are relevant, return an empty array for 'relevantProjects'.

Return the response in JSON format, strictly adhering to the output schema.`,
});

const aiProjectInquiryFlow = ai.defineFlow(
  {
    name: 'aiProjectInquiryFlow',
    inputSchema: AIProjectInquiryInputSchema,
    outputSchema: AIProjectInquiryOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
