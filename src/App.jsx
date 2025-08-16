
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/certificates.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

export default function App() {
  return (
    <div className="bg-slate-900 text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience/>
      <Certificates/>
      <Education/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}


