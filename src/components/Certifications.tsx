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
    <section id="certifications" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[160px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Credentials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">Technical <span className="text-primary">Specializations</span></h2>
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
              <div className="glass-card h-[380px] p-10 rounded-[2.5rem] bg-white/70 flex flex-col justify-between transition-all duration-500 group-hover:bg-white group-hover:border-primary/20 group-hover:-translate-y-2">
                <div className="absolute top-8 right-8 text-[9px] font-bold text-black/10 uppercase tracking-widest">
                  ID: {cert.id}
                </div>

                <div className="space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {iconMap[cert.icon] || <Award className="w-6 h-6" />}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-base font-medium text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-black/5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-12 rounded-[3.5rem] text-center bg-white/40 relative overflow-hidden group border-black/5"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 leading-[1.2] text-foreground">
            Professional <span className="text-primary">Toolkit</span> & <br className="hidden md:block" />
            Social <span className="text-accent italic">Ecosystem.</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <motion.a whileHover={{ y: -5 }} href={SOCIALS.leetcode} target="_blank">
              <Button variant="outline" className="glass-button h-14 px-8 rounded-2xl gap-3 text-base font-bold border-primary/20 hover:bg-primary hover:text-white transition-all">
                <Terminal className="w-5 h-5" />
                LeetCode Profile
              </Button>
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href={SOCIALS.github} target="_blank">
              <Button variant="outline" className="glass-button h-14 px-8 rounded-2xl gap-3 text-base font-bold border-black/10 hover:border-primary/50 text-foreground">
                <Github className="w-5 h-5" />
                GitHub Repos
              </Button>
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href={SOCIALS.linkedin} target="_blank">
              <Button variant="outline" className="glass-button h-14 px-8 rounded-2xl gap-3 text-base font-bold border-black/10 hover:border-primary/50 text-foreground">
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