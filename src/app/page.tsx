import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Skills } from '@/components/Skills';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { AIInquiry } from '@/components/AIInquiry';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProjectGrid />
        <Skills />
        <ExperienceTimeline />
        <AIInquiry />
        <Contact />
      </main>
    </div>
  );
}