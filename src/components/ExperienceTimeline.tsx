"use client"

import React from 'react';
import { TIMELINE } from '@/lib/data';
import { Briefcase, GraduationCap, Trophy, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ExperienceTimeline() {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Academic & Career Path</h2>
          <p className="text-muted-foreground text-lg">My journey through education and professional roles.</p>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 pl-8 space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-0 bg-background border-2 border-primary w-5 h-5 rounded-full z-10 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(96,51,204,0.5)]" />
              
              <div className="glass-card p-6 rounded-2xl hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-accent mb-1 font-bold">
                      {item.type === 'experience' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-5 h-5" />}
                      <h3 className="text-xl leading-none">{item.title}</h3>
                    </div>
                    <span className="text-muted-foreground font-medium">{item.organization}</span>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1 border-white/10 bg-white/5 whitespace-nowrap">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </Badge>
                </div>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {item.achievements && (
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs bg-primary/10 text-primary-foreground px-3 py-1.5 rounded-lg font-medium border border-primary/20">
                        <Trophy className="w-3 h-3 text-accent" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}