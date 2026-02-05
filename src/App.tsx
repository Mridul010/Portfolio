import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SectionTransition } from './components/SectionTransition';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen cursor-none relative">
      <AnimatedBackground />
      <CustomCursor />
      <Hero />
      <SectionTransition>
        <About />
      </SectionTransition>
      <SectionTransition>
        <Projects />
      </SectionTransition>
      <SectionTransition>
        <Contact />
      </SectionTransition>
    </div>
  );
}