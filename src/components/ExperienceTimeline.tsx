"use client"

import React from 'react';
import { TIMELINE } from '@/lib/data';
import { Briefcase, GraduationCap, Trophy, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-32 px-6 relative">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest">
            Milestones
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Professional <span className="text-primary">Saga.</span></h2>
          <p className="text-muted-foreground text-xl font-medium">Tracing the evolution from ECE foundations to Full Stack mastery.</p>
        </div>

        <div className="relative border-l-[3px] border-white/5 ml-4 md:ml-12 pl-12 space-y-20">
          {TIMELINE.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Animated Timeline Point */}
              <div className="absolute -left-[61px] top-0 w-11 h-11 glass-panel rounded-full z-10 flex items-center justify-center group-hover:border-primary transition-all duration-500 shadow-2xl">
                {item.type === 'experience' ? <Briefcase size={16} className="text-primary" /> : <GraduationCap size={18} className="text-accent" />}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform" />
              </div>
              
              <div className="glass-panel p-10 rounded-[3rem] group-hover:border-primary/20 group-hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-white group-hover:text-primary transition-colors">{item.title}</h3>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg font-bold text-accent">{item.organization}</span>
                      {(item as any).location && (
                        <span className="text-muted-foreground text-sm flex items-center gap-2 font-medium">
                          <MapPin size={14} className="text-primary" /> {(item as any).location}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 font-black text-[11px] uppercase tracking-widest text-muted-foreground">
                    <Calendar size={14} className="text-primary" />
                    {item.period}
                  </div>
                </div>
                
                {item.description && (
                  <p className="text-foreground/70 text-lg mb-10 leading-relaxed font-medium max-w-3xl">
                    {item.description}
                  </p>
                )}

                {(item as any).points && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {(item as any).points.map((point: string, i: number) => (
                      <li key={i} className="flex gap-4 text-[15px] text-foreground/70 leading-relaxed font-medium p-4 glass-card rounded-2xl border-white/5">
                        <ArrowRight size={14} className="text-primary mt-1 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {item.achievements && (
                  <div className="flex flex-wrap gap-3">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] bg-primary/10 text-primary px-5 py-2.5 rounded-full font-black uppercase tracking-widest border border-primary/20">
                        <Trophy size={14} />
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