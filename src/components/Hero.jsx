import React from "react";
import BuyButton from "./BuyButton";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="side-left">
          <h2>This is my product</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            exercitationem mollitia quasi deleniti, porro delectus.
          </p>
          <BuyButton/>
        </div>
        <div className="side-right">
          <img src="./images/product-image.jpg" alt="Produto Principal" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
