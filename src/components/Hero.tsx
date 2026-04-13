"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownRight, MousePointer2, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden flex items-center">
      {/* Background Orbs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" 
      />
      <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
            Hello, I'm <br/>
            <span className="text-gradient">Savita Teggi.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            A passionate <span className="text-white font-medium underline decoration-primary decoration-2 underline-offset-4">Software Developer & ECE Student</span> at AMC Engineering College, focused on building innovative, efficient, and user-centric digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a href="#projects">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold gap-2 shadow-lg shadow-primary/20 group">
                Explore My Work
                <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>
            
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/savitateggi" 
                target="_blank" 
                className="bg-white/5 p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/savita-teggi-a15a90307" 
                target="_blank" 
                className="bg-white/5 p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 flex items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary overflow-hidden">
                  <Image src={`https://picsum.photos/seed/user${i}/100/100`} width={40} height={40} alt="User" />
                </div>
              ))}
            </div>
            <p>Collaborating with students across <span className="text-accent font-bold">NxtWave</span>.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-primary/40 rounded-tr-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-accent/40 rounded-bl-3xl" />
            
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl"
            >
              <Image 
                src="https://picsum.photos/seed/savita_port/800/800"
                alt="Savita Teggi"
                fill
                priority
                className="object-cover"
                data-ai-hint="professional woman developer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>

            {/* Experience Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-12 glass-card p-6 rounded-2xl backdrop-blur-xl border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-xl">
                  <MousePointer2 className="w-6 h-6 text-background fill-background" />
                </div>
                <div>
                  <p className="text-3xl font-bold leading-none">2+</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">Years of Coding</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}