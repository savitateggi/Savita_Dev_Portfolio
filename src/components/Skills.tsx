"use client"

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { Code2, Layers, Terminal, Database, Cpu } from 'lucide-react';

const SKILL_GROUPS = [
  {
    title: "MERN Stack",
    icon: <Layers className="w-5 h-5" />,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "TypeScript"],
    proficiency: 92,
  },
  {
    title: "Frontend & UI",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Tailwind CSS", "Redux Toolkit", "Framer Motion", "ShadCN", "HTML5/CSS3"],
    proficiency: 88,
  },
  {
    title: "Core Programming",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["JavaScript (ES6+)", "C++", "Java", "Python", "Problem Solving"],
    proficiency: 85,
  },
  {
    title: "Backend & DevOps",
    icon: <Database className="w-5 h-5" />,
    skills: ["SQL", "Firebase", "REST APIs", "Vercel", "GitHub"],
    proficiency: 80,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">
                Tech Stack
              </Badge>
              <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tighter leading-none text-foreground">
                Technical <br />
                <span className="text-muted-foreground/30">Expertise</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Equipped with a comprehensive set of technologies to build modern, scalable, and user-friendly web applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="glass-card p-10 rounded-[2.5rem] bg-white/60 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Key Focus</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Deeply interested in Backend Architecture, Database Optimization, and building seamless Developer Experiences through AI-integrated workflows.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-card p-8 rounded-[3rem] bg-white/40 hover:border-primary/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {group.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="px-3 py-1 bg-black/5 hover:bg-primary/10 transition-colors border-transparent text-[11px] font-medium text-muted-foreground hover:text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                    <span>Proficiency</span>
                    <span className="text-primary">{group.proficiency}%</span>
                  </div>
                  <Progress 
                    value={group.proficiency} 
                    className="h-1.5 bg-black/5" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}