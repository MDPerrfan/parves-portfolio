import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import StarsBackground from './Components/StarsBackground';

const App = () => {
  return (
    <div className="app-container">
      <ToastContainer/>
      <StarsBackground />
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer/>
      <ScrollToTop />
    </div>
  )
}

export default App
