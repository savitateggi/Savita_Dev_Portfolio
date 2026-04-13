"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/data';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Achievements</h2>
        </motion.div>

        <div className="space-y-6">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card p-8 rounded-[2rem] bg-white/60 hover:bg-white/80 transition-all duration-300"
            >
              <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform shrink-0 mt-1">
                {achievement.id}.
              </span>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                {achievement.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}