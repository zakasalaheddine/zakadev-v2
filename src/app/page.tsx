import Experiences from "./_components/experiences";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <main className="container flex flex-col">
      <Hero />
      <Experiences />
      Home Page
    </main>
  );
}
