import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MoreAbout from './components/MoreAbout';
import Faq from './components/Faq';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Modal from './components/Modal';
class App extends Component {
  constructor() {
    super();
    this.state = {
      modalVisibility: false,
    }
  }
  handleModalSate(newState) {
    const newModalState = { modalVisibility: newState }
    this.setState(newModalState);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Hero handleModalSate={this.handleModalSate.bind(this)} />
        <About />
        <MoreAbout />
        <Faq />
        <CallToAction handleModalSate={this.handleModalSate.bind(this)} />
        <Footer />
        <Modal handleModalSate={this.handleModalSate.bind(this)} modalDisplay={this.state.modalVisibility}/>
      </div>
    );
  }
}

export default App;
