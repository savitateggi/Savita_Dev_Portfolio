"use client"

import React from 'react';
import { SOCIALS } from '@/lib/data';
import { Mail, Linkedin, Github, Instagram, Code, MapPin, Send, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function Contact() {
  const socialItems = [
    { name: 'GitHub', icon: <Github />, link: SOCIALS.github },
    { name: 'LinkedIn', icon: <Linkedin />, link: SOCIALS.linkedin },
    { name: 'Instagram', icon: <Instagram />, link: SOCIALS.instagram },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border-white/10"
        >
          {/* Left Panel: Info */}
          <div className="lg:w-2/5 p-8 md:p-12 bg-white/[0.02] border-r border-white/5 flex flex-col justify-between">
            <div>
              <Badge variant="secondary" className="mb-8 bg-primary/20 text-primary border-primary/20 px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest">
                Get In Touch
              </Badge>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter leading-none">
                Let's <span className="text-muted-foreground">Connect</span>
              </h2>

              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-8 flex items-center gap-4 text-xs font-medium text-primary/80">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Info className="w-4 h-4" />
                </div>
                Live Preview Mode
              </div>

              <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-sm">
                Have a vision for a project or just want to chat tech? Reach out through the form or find me on my socials.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 group">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-1">Email</p>
                    <a href={`mailto:${SOCIALS.email}`} className="text-lg font-bold hover:text-primary transition-colors">
                      {SOCIALS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-1">Location</p>
                    <p className="text-lg font-bold">Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-4">Social Ecosystem</p>
              <div className="flex gap-4">
                {socialItems.map((item) => (
                  <motion.a 
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all text-foreground/80 hover:text-primary"
                  >
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Full Name</label>
                <Input placeholder="John Doe" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-primary focus:ring-primary/20 px-6" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Email Protocol</label>
                <Input placeholder="john@domain.com" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-primary focus:ring-primary/20 px-6" />
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Subject</label>
              <Input placeholder="Technical Inquiry" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-primary focus:ring-primary/20 px-6" />
            </div>

            <div className="space-y-3 mb-10">
              <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Your Message</label>
              <Textarea placeholder="Describe your project vision..." className="min-h-[180px] bg-white/5 border-white/10 rounded-3xl focus:border-primary focus:ring-primary/20 px-6 py-4" />
            </div>

            <Button className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg gap-3 shadow-lg shadow-primary/30 transition-all group">
              Initiate Contact
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm gap-4">
          <p>© {new Date().getFullYear()} Savita Teggi. Crafted with Glassmorphism.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
