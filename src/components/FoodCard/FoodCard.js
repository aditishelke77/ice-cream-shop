import React from 'react'
import "./FoodCard.css"
import { THEME } from '../../config/data'

function FoodCard({imgUrl, title,description,price } ) {

    

  return (
    
    <div className="food-card">
      <img
      src={imgUrl}
      className="food-card-image"
      alt="Food"/>
      
        <h1 className="food-card-title" style={{color:THEME.highlight}}>
          {title}</h1>
        <p>{description}</p>

        {
          price ?
          <p className="ice-cream-card-price">
          Rs {price}
          </p>
          :null

        }
        <button className="ice-cream-card-button" style={{backgroundColor:THEME.highlight}}>
          Add to Card
        </button>

       
    </div>
  )
}

export default FoodCard