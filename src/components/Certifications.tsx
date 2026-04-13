"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS, SOCIALS } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code2, Layers, Award, Github, Linkedin, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
};

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[160px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Credentials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-primary">Specializations</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Focused expertise in modern stack development and high-performance architectures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="glass-card h-[380px] p-10 rounded-[2.5rem] bg-[#0A0A0A]/80 border-white/5 flex flex-col justify-between transition-all duration-500 group-hover:bg-[#111111] group-hover:border-primary/20 group-hover:-translate-y-2">
                
                {/* ID - Top Right */}
                <div className="absolute top-8 right-8 text-[9px] font-bold text-white/10 uppercase tracking-widest">
                  ID: {cert.id}
                </div>

                <div className="space-y-8">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {iconMap[cert.icon] || <Award className="w-6 h-6" />}
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-white group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-base font-medium text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                {/* Date - Bottom */}
                <div className="pt-6 border-t border-white/5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-primary/60 transition-colors">
                    {cert.date}
                  </span>
                </div>
              </div>
              
              {/* Card Bottom Shadow/Glow */}
              <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-gradient-to-r ${cert.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-12 rounded-[3.5rem] text-center border-white/5 bg-[#0A0A0A]/40 relative overflow-hidden group"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 leading-[1.2]">
            Professional <span className="text-primary">Toolkit</span> & <br className="hidden md:block" />
            Social <span className="text-accent italic">Ecosystem.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto relative z-10 leading-relaxed font-medium mb-12">
            Bridging the gap between complex hardware systems and elegant software solutions. Dive deeper into my professional background through my curated profiles.
          </p>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <motion.a whileHover={{ y: -5 }} href={SOCIALS.leetcode} target="_blank">
              <Button variant="outline" className="glass-button h-14 px-8 rounded-2xl gap-3 text-base font-bold border-primary/20 hover:bg-primary hover:text-white transition-all">
                <Terminal className="w-5 h-5" />
                LeetCode Profile
              </Button>
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href={SOCIALS.github} target="_blank">
              <Button variant="outline" className="glass-button h-14 px-8 rounded-2xl gap-3 text-base font-bold border-white/10 hover:border-primary/50">
                <Github className="w-5 h-5" />
                GitHub Repos
              </Button>
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href={SOCIALS.linkedin} target="_blank">
              <Button variant="outline" className="glass-button h-14 px-8 rounded-2xl gap-3 text-base font-bold border-white/10 hover:border-primary/50">
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
