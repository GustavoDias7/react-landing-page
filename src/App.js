import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MoreAbout from './components/MoreAbout';
import Faq from './components/Faq';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { GlobalStorage } from './components/GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Header />
      <Hero />
      <About />
      <MoreAbout />
      <Faq />
      <CallToAction />
      <Footer />
      <Modal />
    </GlobalStorage>
  );
}

export default App;
