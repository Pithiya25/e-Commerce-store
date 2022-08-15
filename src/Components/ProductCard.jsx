import React from "react";
import './ProductCard.css'

function ProductCard(props) {
  return (
    <div className="main">
      <div className="card">
        <div className="card-img"> 
        <img src={props.img} alt="" />
        </div>
        <div className="card-text">
          <p id="name">{props.name}</p>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half"></i>
          </div>
          <p>{props.price}</p>
          <button>Add to Cart</button>
    
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
