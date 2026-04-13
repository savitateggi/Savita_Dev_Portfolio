"use client"

import React, { useState } from 'react';
import { aiProjectInquiry } from '@/ai/flows/ai-project-inquiry';
import { PROJECTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Search, ExternalLink, Github, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function AIInquiry() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any[] | null>(null);

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const { relevantProjects } = await aiProjectInquiry({
        query,
        projects: PROJECTS
      });
      setResults(relevantProjects);
    } catch (error) {
      console.error('AI Inquiry failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-inquiry" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20 gap-1.5 px-4 py-1">
            <Sparkles className="w-3.5 h-3.5" />
            AI Powered
          </Badge>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Smart Project Finder</h2>
          <p className="text-muted-foreground text-lg">
            Ask about specific skills (e.g., "Show me React projects") and my AI assistant will find the best matches.
          </p>
        </div>

        <Card className="glass-card shadow-2xl border-primary/20 mb-12">
          <CardContent className="pt-8">
            <form onSubmit={handleInquiry} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="e.g., 'Projects involving REST APIs' or 'Show me my Java work'"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 h-12 bg-background/50 border-white/10"
                />
              </div>
              <Button type="submit" disabled={isLoading} className="h-12 px-8 font-bold gap-2">
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                Analyze
              </Button>
            </form>
          </CardContent>
        </Card>

        {results && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {results.length > 0 ? (
              results.map((project, idx) => (
                <Card key={idx} className="bg-background/40 border-white/5 overflow-hidden group">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-accent">{project.title}</h3>
                        <div className="flex gap-3">
                          {project.githubLink && (
                            <a href={project.githubLink} target="_blank" className="text-muted-foreground hover:text-white"><Github className="w-5 h-5" /></a>
                          )}
                          {project.vercelLink && (
                            <a href={project.vercelLink} target="_blank" className="text-muted-foreground hover:text-white"><ExternalLink className="w-5 h-5" /></a>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
                      
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 mb-4">
                        <div className="flex items-center gap-2 mb-1 text-primary text-xs font-bold uppercase tracking-wider">
                          <Sparkles className="w-3 h-3" /> AI Reasoning
                        </div>
                        <p className="text-sm text-muted-foreground italic">"{project.relevanceExplanation}"</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, i: number) => (
                          <Badge key={i} variant="secondary" className="bg-white/5 font-normal">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 bg-white/5 rounded-xl border border-dashed border-white/10">
                <p className="text-muted-foreground">No matching projects found for your query. Try something like "Web Development" or "Python".</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}