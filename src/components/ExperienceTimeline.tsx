"use client"

import React from 'react';
import { TIMELINE } from '@/lib/data';
import { Briefcase, GraduationCap, Trophy, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Professional <span className="text-primary">Journey</span></h2>
          <p className="text-muted-foreground text-lg">My path through education and professional milestones.</p>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 pl-8 space-y-12">
          {TIMELINE.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-0 bg-background border-2 border-primary w-5 h-5 rounded-full z-10 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(96,51,204,0.5)]" />
              
              <div className="glass-card p-6 rounded-2xl hover:border-primary/40 transition-all duration-300 border-white/5 bg-white/[0.02]">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-accent mb-1 font-bold">
                      {item.type === 'experience' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-5 h-5" />}
                      <h3 className="text-xl leading-none">{item.title}</h3>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-primary font-medium">{item.organization}</span>
                      {(item as any).location && (
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {(item as any).location}
                        </span>
                      )}
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 bg-white/5 border-white/10 whitespace-nowrap text-xs">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </Badge>
                </div>
                
                {item.description && (
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {(item as any).points && (
                  <ul className="space-y-3 mb-6">
                    {(item as any).points.map((point: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/70 leading-relaxed">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {item.achievements && (
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border border-primary/20">
                        <Trophy className="w-2.5 h-2.5" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
