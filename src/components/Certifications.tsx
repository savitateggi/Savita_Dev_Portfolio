"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Code2, ShieldCheck, Layers, Cpu, Award, ExternalLink } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
};

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1 uppercase tracking-widest text-[10px] font-bold">Credentials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-primary">Accolades</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Validation of technical expertise and continuous learning in software engineering and electronics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-[2.5rem] flex flex-col items-start group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 w-full">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 w-fit">
                  {iconMap[cert.icon] || <Award className="w-6 h-6" />}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-bold text-muted-foreground mb-1">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5 w-full">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">
                    {cert.date}
                  </span>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-[8px] font-bold text-white/10 group-hover:text-white/20 transition-colors uppercase tracking-widest">
                ID: {cert.id}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-12 rounded-[3rem] text-center border-primary/20 bg-gradient-to-br from-primary/10 to-transparent relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Passionate about <span className="text-primary">scalable</span> & <br className="hidden md:block" />
            <span className="text-accent italic">impactful</span> software solutions.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto relative z-10 leading-relaxed">
            I specialize in bridging the gap between complex hardware systems and elegant, user-centric web applications. 
            Currently diving deep into Generative AI to build the future of automated development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
