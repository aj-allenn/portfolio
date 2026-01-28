import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main>
    <Hero/>
    <About/>
    <Skills/>
    <Services/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
   </main>
  );
}
