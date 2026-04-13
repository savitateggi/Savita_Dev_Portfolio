"use client"

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Code2, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={cn(
        "nav-island",
        isScrolled && "scrolled shadow-2xl shadow-primary/10"
      )}>
        <div className="flex w-full items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary/20 p-1.5 rounded-lg border border-primary/30 group-hover:scale-110 transition-transform">
              <Code2 className="text-primary w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">
              Savita<span className="text-primary">.dev</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-white/10 hover:text-primary transition-all duration-300 text-foreground/80"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 pr-4 border-r border-white/10">
              <a href="https://github.com/savitateggi" target="_blank" className="p-2 text-foreground/60 hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/savita-teggi-a15a90307" target="_blank" className="p-2 text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a 
              href="#contact" 
              className="bg-primary text-white px-5 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              Hire Me
            </a>
            
            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-foreground p-2 rounded-full bg-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-6 top-24 z-[60] glass-panel rounded-[2rem] p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold hover:text-primary transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}