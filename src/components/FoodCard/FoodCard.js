import React from 'react'
import "./FoodCard.css"
//import vegIcon from "./veg-icons.png"
//import nonVegIcon from "./non-veg-icons.png"

function FoodCard({imgUrl, title,description } ) {

    

  return (
    
    <div className="food-card">
      <img
      src={imgUrl}
      className="food-card-image"
      alt="Food"/>
      
        <h1 className="food-card-title">
          {title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default FoodCard