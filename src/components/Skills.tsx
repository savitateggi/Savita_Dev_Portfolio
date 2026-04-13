"use client"

import React from 'react';
import { SKILLS } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Database, Layers, Wrench, User } from 'lucide-react';

export function Skills() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Programming': return <Code className="w-5 h-5 text-accent" />;
      case 'Web Development': return <Layers className="w-5 h-5 text-accent" />;
      case 'Databases': return <Database className="w-5 h-5 text-accent" />;
      case 'IT Constructs': return <Server className="w-5 h-5 text-accent" />;
      case 'Development Tools': return <Wrench className="w-5 h-5 text-accent" />;
      case 'Soft Skills': return <User className="w-5 h-5 text-accent" />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg">Categorized tools and technologies I've mastered.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl group hover:shadow-[0_8px_30px_rgba(161,187,255,0.05)] transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/20 border border-primary/20">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="px-3 py-1 bg-white/5 hover:bg-primary hover:text-white transition-colors border-white/5 font-normal text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}