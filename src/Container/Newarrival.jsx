import React from "react";
import ProductCard from "../Components/ProductCard";
import "./Newarrival.css";
import img1 from "../imgs/s2.jpg";
import img2 from "../imgs/s3.jpg";
import img3 from "../imgs/s8.jpg";

function Newarrival() {
  return (
    <div className="containerNA">
      <div className="NA-text">
        <h2>
          <span className="clr-text">New</span> Arrivals
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit</p>
      </div>

      <div className="product-cont">
        <ProductCard img={img1} price="1022$" name="Wrogn" />
        <ProductCard img={img2} price="999$" name="Addidas" />
        <ProductCard img={img3} price="1200$ " name="Nike" />
        <ProductCard img={img2} price="800$" name="Campus" />
        <ProductCard img={img1} price="1700$ " name="Puma" />
        <ProductCard img={img3} price="1400$ " name="Red Tape" />
        <ProductCard img={img2} price="2099$ " name="HRX" />
        <ProductCard img={img3} price="1099$ " name="Sketchers" />
      </div>
    </div>
  );
}

export default Newarrival;
