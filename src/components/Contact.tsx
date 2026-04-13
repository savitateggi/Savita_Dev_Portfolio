"use client"

import React from 'react';
import { SOCIALS } from '@/lib/data';
import { Mail, Linkedin, Github, Instagram, Code, ArrowUpRight, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIALS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialItems = [
    { name: 'LinkedIn', icon: <Linkedin />, link: SOCIALS.linkedin, color: 'hover:text-[#0077B5]' },
    { name: 'GitHub', icon: <Github />, link: SOCIALS.github, color: 'hover:text-[#fff]' },
    { name: 'Instagram', icon: <Instagram />, link: SOCIALS.instagram, color: 'hover:text-[#E4405F]' },
    { name: 'LeetCode', icon: <Code />, link: SOCIALS.leetcode, color: 'hover:text-[#FFA116]' },
  ];

  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Let's build <br/><span className="text-primary">something together.</span></h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-md">
              Available for freelance opportunities and full-time roles in web development. I'm always open to discussing new projects and creative ideas.
            </p>

            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">My Email</span>
                <div className="flex items-center gap-3">
                  <a href={`mailto:${SOCIALS.email}`} className="text-2xl font-bold hover:text-primary transition-colors flex items-center gap-2 group">
                    {SOCIALS.email}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <Button variant="ghost" size="icon" onClick={copyEmail} className="rounded-full bg-white/5 h-10 w-10">
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {socialItems.map((item) => (
              <a 
                key={item.name}
                href={item.link}
                target="_blank"
                className={`group glass-card p-8 rounded-3xl flex flex-col justify-between items-start transition-all hover:-translate-y-2 border-white/5 hover:border-primary/50 overflow-hidden relative`}
              >
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 100 })}
                </div>
                
                <div className={`p-4 rounded-2xl bg-white/5 mb-8 ${item.color} transition-colors group-hover:bg-primary/20`}>
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-bold">{item.name}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Savita Teggi. Crafted with passion & React.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}