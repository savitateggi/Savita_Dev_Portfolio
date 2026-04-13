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
    <section className="py-24 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`p-4 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 ${stat.color}`}>
                {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter text-gradient">{stat.value}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </p>
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
