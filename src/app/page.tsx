import About from "@components/About";
import Contact from "@components/Contact";
import Home from "@components/Home";
import Projects from "@components/Projects";
import Services from "@components/Services";
import ActiveAos from "@components/ActiveAos";

export default function page() {
  return (
    <main className="text-white">
      <ActiveAos />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
