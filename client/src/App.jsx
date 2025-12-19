import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <main style={{ padding: "40px", color: "white" }}>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

