"use client"

import React from 'react';
import { PROJECTS } from '@/lib/data';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A selection of my best work, ranging from hardware integrations to responsive web applications.
            </p>
          </div>
          <a 
            href="https://github.com/savitateggi" 
            target="_blank" 
            className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
            View all on GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <Card key={idx} className="group overflow-hidden glass-card border-white/10 hover:border-primary/50 transition-all duration-500">
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                <Image 
                  src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/600/400`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  data-ai-hint="code project"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {project.vercelLink && (
                    <Badge className="bg-primary text-white font-bold border-none">Live</Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6 relative z-20">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/20 p-2 rounded-lg mb-4 inline-block">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" className="hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.vercelLink && (
                      <a href={project.vercelLink} target="_blank" className="hover:text-accent transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded text-foreground/60">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}