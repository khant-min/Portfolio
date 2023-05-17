import About from "@components/About";
import Contact from "@components/Contact";
import Home from "@components/Home";
import Projects from "@components/Projects";
import Services from "@components/Services";

export default function page() {
  return (
    <main className="text-white">
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
