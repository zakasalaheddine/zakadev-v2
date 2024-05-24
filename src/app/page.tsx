import Experiences from "./_components/experiences";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <main className="container flex flex-col">
      <Hero />
      <Experiences />
      <Projects />
      <Testimonials />
    </main>
  );
}
