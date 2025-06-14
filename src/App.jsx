import "./App.css";
import ExperienceSection from "./Components/ExperienceSection";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ExperienceSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
