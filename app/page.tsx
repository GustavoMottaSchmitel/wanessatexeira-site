import About from "./_components/AboutSection";
import Contact from "./_components/ContactSection";
import Header from "./_components/Header";
import Hero from "./_components/HeroSection";
import Properties from "./_components/PropertiesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Properties />
      <Contact />
    </main>
  )
}