import React, { Component } from "react";
import AccordionList from "./AccordionList";

class Faq extends Component {
  render() {
    return (
      <section className="faq">
        <div className="container">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <div className="accordion-contianer">
            <AccordionList />
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
