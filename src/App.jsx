import useReveal from "./hooks/useReveal";
import useCursor from "./hooks/useCursor";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certs from "./components/Certs";
import HomeLab from "./components/HomeLab";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import RESUME from "./data/resume";

export default function App() {
  const { cursorRef, ringRef, onHover, onUnhover } = useCursor();
  useReveal();

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      <Nav onHover={onHover} onUnhover={onUnhover} />
      <Hero data={RESUME} onHover={onHover} onUnhover={onUnhover} />
      <StatsBar stats={RESUME.stats} />
      <Skills skills={RESUME.skills} />
      <Experience experience={RESUME.experience} />
      <Certs
        certifications={RESUME.certifications}
        plannedCerts={RESUME.plannedCerts}
      />
      <HomeLab lab={RESUME.lab} />
      <Contact data={RESUME} onHover={onHover} onUnhover={onUnhover} />
      <Footer data={RESUME} />
    </>
  );
}
