import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSplash from "./components/HeroSplash";
import Navbar from "./components/Navbar";
import ExperienceSection from "./components/ExperienceSection";
import GamesSection from "./components/GamesSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <main className="bg-black text-white">
      <HeroSplash />

      <section className="relative min-h-screen border-t border-white/10 bg-[#050505]">
        <Navbar />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <GamesSection />
        <Footer />
      </section>
    </main>
  );
}

export default App;
