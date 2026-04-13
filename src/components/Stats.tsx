"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, GraduationCap, Github } from 'lucide-react';

const stats = [
  { label: 'Lines of Code', value: '50K+', icon: <Code2 />, color: 'text-primary' },
  { label: 'GitHub Repos', value: '25+', icon: <Github />, color: 'text-accent' },
  { label: 'Student Queries', value: '500+', icon: <GraduationCap />, color: 'text-primary' },
  { label: 'ECE Innovations', value: '10+', icon: <Cpu />, color: 'text-accent' },
];

export function Stats() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[160px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-[3rem] flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-500"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl bg-white/5 mb-8 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20",
                stat.color
              )}>
                {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-5xl font-black mb-2 tracking-tighter text-gradient">{stat.value}</h3>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-panel p-16 rounded-[4rem] text-center overflow-hidden group border-white/10"
        >
          {/* Internal Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000" />
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-none tracking-tighter">
            Passionate about <span className="text-primary">Scalable</span> & <br className="hidden md:block" />
            <span className="text-accent italic">Impactful</span> Software Engineering.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto relative z-10 leading-relaxed font-medium">
            I specialize in bridging the gap between complex hardware systems and elegant, user-centric web applications. 
            Currently diving deep into <span className="text-white">Generative AI</span> to build the future of automated development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { cn } from '@/lib/utils';