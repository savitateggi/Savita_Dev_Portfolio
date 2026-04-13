"use client"

import React from 'react';
import { PROJECTS } from '@/lib/data';
import { Github, Code2, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function ProjectGrid() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.02] blur-[160px] -z-10" />
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-white/20 text-white px-4 py-1 uppercase tracking-widest text-[10px] font-bold bg-white/5">
              Case Studies
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Featured <span className="text-primary">Works.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl font-medium leading-relaxed">
              Engineering solutions that scale. Focused on AI integration and robust full-stack architectures.
            </p>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://github.com/savitateggi" 
            target="_blank" 
            className="glass-button h-16 px-10 rounded-full flex items-center gap-3 font-bold text-sm uppercase tracking-widest shadow-xl shadow-black/20 border-white/20"
          >
            <Github size={18} />
            Entire Repository
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group h-full"
            >
              <a 
                href={project.githubLink || `https://github.com/savitateggi`} 
                target="_blank" 
                className="relative block h-full glass-card rounded-[2.5rem] overflow-hidden group-hover:border-white/40 group-hover:-translate-y-3 transition-all duration-700 bg-white/[0.02] border-white/10"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/800/500`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-white/5 to-transparent" />
                  
                  {/* Floating Tech Stack */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-20">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-widest bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-[15px] leading-relaxed line-clamp-3 font-medium">
                    {project.description}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-muted-foreground/60 group-hover:text-primary transition-colors">
                    <span>Source Code Available</span>
                    <Github size={14} />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}