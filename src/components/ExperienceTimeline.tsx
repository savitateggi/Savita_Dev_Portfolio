"use client"

import React from 'react';
import { TIMELINE } from '@/lib/data';
import { Briefcase, GraduationCap, Trophy, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-32 px-6 relative bg-[#050505]">
      {/* Background divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/30 px-6 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-[0.2em]">
              Milestones
            </Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter"
          >
            Professional <span className="text-primary">Journey.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl md:text-2xl font-medium max-w-3xl mx-auto"
          >
            Tracing the evolution from ECE foundations to Full Stack mastery.
          </motion.p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-white/5 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
          {TIMELINE.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[41px] md:-left-[73px] top-0 w-10 h-10 glass-panel rounded-full z-10 flex items-center justify-center border-white/10 bg-background">
                {item.type === 'experience' ? 
                  <Briefcase size={16} className="text-primary" /> : 
                  <GraduationCap size={18} className="text-accent" />
                }
              </div>
              
              <div className="glass-card p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border-white/5 hover:border-primary/20 transition-all duration-500 group">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <span className="text-lg font-bold text-accent/90">{item.organization}</span>
                      {(item as any).location && (
                        <span className="text-muted-foreground text-sm flex items-center gap-2">
                          <MapPin size={12} className="text-primary/60" /> {(item as any).location}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="shrink-0 bg-white/5 px-5 py-2 rounded-xl border border-white/5 font-black text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Calendar size={12} />
                    {item.period}
                  </div>
                </div>
                
                {item.description && (
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium">
                    {item.description}
                  </p>
                )}

                {(item as any).points && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(item as any).points.map((point: string, i: number) => (
                      <div key={i} className="flex gap-3 text-[15px] text-foreground/80 font-medium items-start">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>
                )}

                {item.achievements && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.achievements.map((achievement, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/5 text-primary border-primary/20 px-4 py-1 text-[9px] uppercase font-black tracking-widest">
                        {achievement}
                      </Badge>
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
