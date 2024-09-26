import React from 'react'
import "./Home.css"

import FoodCard from "./../../components/FoodCard/FoodCard"
import { PRODUCTS,MAIN_TITLE,TAGLINE,THEME } from "./../../config/data"



function Home() {
  return (
    <div>
      <h1 className="ice-cream-header" style={{color:THEME.highlight,margin:0}}>
       {MAIN_TITLE}
      </h1>
      <p className="tagline-header">
        {TAGLINE}
      </p>
      <div className="food-cards-container">
        {PRODUCTS.map((foodItem)=>{
          return<FoodCard
          imgUrl={foodItem.imgUrl}
          title={foodItem.title}
          description={foodItem.description}
          price={foodItem.price} />

        })}

        
      </div>
    </div>
  )
}

export default Home