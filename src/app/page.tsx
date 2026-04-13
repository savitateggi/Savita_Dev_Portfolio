import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Skills } from '@/components/Skills';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { Stats } from '@/components/Stats';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProjectGrid />
        <Stats />
        <Skills />
        <ExperienceTimeline />
        <Contact />
      </main>
    </div>
  );
}
