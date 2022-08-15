import React from 'react'
import './PopularPrdct.css'
import img1 from '../imgs/bu1.jpg'
import img2 from '../imgs/bu2.jpg'
import img3 from '../imgs/bu3.jpg'
import img4 from '../imgs/bu4.jpg'
import ProductCard from '../Components/ProductCard'

function PopularPrdct() {
  return (
    <div className="container-pop">
        <div className="pop-title">
        <h1>
          <span className="clr-text">Popular</span> Products
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="card-cont">
           <ProductCard img={img1} name='Facial Cream' price='599$'/> 
           <ProductCard img={img2} name='Top & Jacket' price='799$'/> 
           <ProductCard img={img3} name='Branded Lotion ' price='999$'/> 
           <ProductCard img={img4} name='Makeup Brushes ' price='1099$'/> 
            
        </div>
    </div>
  )
}

export default PopularPrdct