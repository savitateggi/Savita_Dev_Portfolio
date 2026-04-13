"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownRight, Github, Linkedin, MousePointer2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen pt-40 pb-20 px-6 overflow-hidden flex items-center bg-background">
      {/* 3D Background Elements with Subtle Light Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] -z-10" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] -z-10" 
      />
      
      {/* Floating White Light Accents */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-96 h-96 bg-white/5 rounded-full blur-[120px] -z-5"
      />

      {/* Floating Frosted Spheres */}
      <motion.div
        animate={{ 
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, 360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] w-40 h-40 bg-gradient-to-br from-primary/20 to-white/5 rounded-full blur-3xl -z-5"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-xs font-bold text-primary uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Opportunities
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] text-white">
            Full Stack <br/>
            <span className="text-gradient">Architect.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
            I'm <span className="text-white">Savita Teggi</span>, an ECE student & developer bridging the gap between <span className="text-accent underline decoration-accent/30 underline-offset-8">hardware precision</span> and <span className="text-primary underline decoration-primary/30 underline-offset-8">software elegance.</span>
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
            {/* Animated Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-[3rem] overflow-hidden glass-panel">
              <Image 
                src="https://picsum.photos/seed/savita_portfolio_v2/800/800"
                alt="Savita Teggi"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                data-ai-hint="professional woman developer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Experience Card Overlay */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 glass-panel p-6 rounded-3xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-4 rounded-2xl border border-primary/30">
                  <MousePointer2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-black text-white leading-none">2+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-primary">Years Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}