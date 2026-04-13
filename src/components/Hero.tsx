"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownRight, MousePointer2, Github, Linkedin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20 gap-2 px-4 py-1.5 rounded-full animate-bounce">
            <Sparkles className="w-4 h-4" />
            Welcome to my digital workshop
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
            Hello, I'm <br/>
            <span className="text-gradient">Savita Teggi.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            A passionate <span className="text-white font-medium underline decoration-primary decoration-2 underline-offset-4">Full Stack Developer</span> and CSE Student at AMC Engineering College, focused on building innovative, efficient, and user-centric digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold gap-2 shadow-lg shadow-primary/20 group">
              Explore My Work
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/savitateggi" target="_blank" className="bg-white/5 p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/savita-teggi-a15a90307" target="_blank" className="bg-white/5 p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary overflow-hidden">
                  <Image src={`https://picsum.photos/seed/user${i}/100/100`} width={40} height={40} alt="User" />
                </div>
              ))}
            </div>
            <p>Loved by students and collaborators across <span className="text-accent font-bold">NxtWave</span>.</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Visual elements surrounding profile image */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-primary/40 rounded-tr-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-accent/40 rounded-bl-3xl" />
            
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-[40px] overflow-hidden border-8 border-white/5 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/savita_port/800/800"
                alt="Savita Teggi"
                fill
                priority
                className="object-cover"
                data-ai-hint="professional woman developer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Experience Card Overlay */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-12 glass-card p-6 rounded-2xl animate-in zoom-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-xl">
                  <MousePointer2 className="w-6 h-6 text-background fill-background" />
                </div>
                <div>
                  <p className="text-3xl font-bold leading-none">2+</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">Years of Coding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}