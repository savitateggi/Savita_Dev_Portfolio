"use client"

import React from 'react';
import { PROJECTS } from '@/lib/data';
import { Github, Code2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-primary">Developments</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Every line of code is a step toward building smarter systems. Explore my latest repositories on GitHub.
            </p>
          </div>
          <motion.a 
            whileHover={{ x: 5, scale: 1.05 }}
            href="https://github.com/savitateggi" 
            target="_blank" 
            className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-all glass-button px-8 py-4 rounded-full shadow-lg shadow-primary/10"
          >
            <Github className="w-5 h-5" />
            Full GitHub Profile
          </motion.a>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div key={idx} variants={item}>
              <a 
                href={project.githubLink || `https://github.com/savitateggi`} 
                target="_blank" 
                className="block h-full group outline-none focus-visible:ring-2 ring-primary rounded-[var(--radius)]"
              >
                <Card className="h-full overflow-hidden glass-card glass-card-hover border-white/5 relative flex flex-col group-hover:translate-y-[-8px]">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent z-10" />
                    <Image 
                      src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/600/400`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-primary/30 backdrop-blur-md p-2 rounded-xl border border-white/10">
                        <Code2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-7 flex-1 flex flex-col relative z-20">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-primary/80 border border-primary/10 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center gap-1 font-bold text-xs uppercase tracking-widest">
                        Repo <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
