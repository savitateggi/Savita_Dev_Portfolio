"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownRight, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen pt-40 pb-20 px-6 overflow-hidden flex items-center bg-background">
      {/* 3D Background Elements with High-End White Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.4, 0.1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-white/10 rounded-full blur-[180px] -z-10" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.25, 0.08],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] -z-10" 
      />
      
      {/* Intense White Focal Glow */}
      <motion.div
        animate={{ 
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[30%] w-full h-full bg-white/[0.05] rounded-full blur-[200px] -z-5"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-xs font-bold text-white uppercase tracking-widest border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Available for New Opportunities
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] text-white">
            Savita <br/>
            <span className="text-gradient">Teggi.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
            I'm a <span className="text-white">Full Stack Architect</span>, an ECE student & developer bridging the gap between <span className="text-accent underline decoration-accent/30 underline-offset-8">hardware precision</span> and <span className="text-primary underline decoration-primary/30 underline-offset-8">software elegance.</span>
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects">
              <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold gap-3 shadow-2xl shadow-primary/20 bg-primary hover:bg-primary/90 transition-all group">
                Explore My Work
                <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>
            
            <div className="flex items-center gap-3">
              <motion.a 
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                href="https://github.com/savitateggi" 
                target="_blank" 
                className="glass-button p-5 rounded-full"
              >
                <Github size={24} className="text-white" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                href="https://linkedin.com/in/savita-teggi-a15a90307" 
                target="_blank" 
                className="glass-button p-5 rounded-full"
              >
                <Linkedin size={24} className="text-white" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-primary/20 to-white/20 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-[3rem] overflow-hidden glass-panel">
              <Image 
                src="https://picsum.photos/seed/savita_portfolio_v2/800/800"
                alt="Savita Teggi"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                data-ai-hint="professional woman developer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
