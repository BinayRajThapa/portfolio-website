import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = ({ setShowConfetti }) => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact setShowConfetti={setShowConfetti} />
      <Footer />
    </>
  );
};

export default Home;
