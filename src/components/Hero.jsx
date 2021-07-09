import React, { Component } from "react";
import BuyButton from "./BuyButton";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="side-left">
            <h2>This is my product</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              exercitationem mollitia quasi deleniti, porro delectus.
            </p>
            <BuyButton handleModalSate={this.props.handleModalSate} />
          </div>
          <div className="side-right">
            <img src="./images/product-image.jpg" alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
