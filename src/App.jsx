import "./App.css"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import ContactForm from "./components/ContactForm"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <div className="overflow-auto overflow-x-hidden">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto lg:px-14 px-6">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <ContactForm />
      </div>
      <Toaster />
    </div>
  )
}

export default App
