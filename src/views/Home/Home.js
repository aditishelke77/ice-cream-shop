import React from 'react'
import "./Home.css"

import FoodCard from "./../../components/FoodCard/FoodCard"

function Home() {
  return (
    <div>
      <h1>
        Ice-Cream-Shop
      </h1>
      <div className="food-cards-container">
        <FoodCard
          imgUrl="https://img.freepik.com/premium-photo/chocolate-almond-gelato-yummy-delicious-gelato-ice-creame-image_1020697-535219.jpg"
          title="Chocolate Flaver"
          description="A unique and striking dessert that combines the creaminess of ice cream with activated charcoal." />

        <FoodCard
          imgUrl="https://img.freepik.com/premium-photo/fresh-raspberry-style-ice-cream_1268849-325.jpg"
          title="Strawberry Flavor"
          description="This strawberry ice cream is egg-free and easy to make with fresh strawberries cream for fruity frozen dessert." />

        <FoodCard
          imgUrl="https://img.freepik.com/premium-photo/drawing-ice-cream-bowl-with-spoon-it_984027-178245.jpg"
          title="Vanilla Flavor"
          description="Vanilla ice cream has a creamy texture and a sweet, simple flavor. The taste of vanilla can trigger memories" />

<FoodCard
          imgUrl="https://img.freepik.com/premium-photo/default-mango-ice-cream_1114710-162372.jpg"
          title="Mango Flavor"
          description="Mango ice cream is made with four ingredients no ice maker needed! Rich, silky, and it's sure to be a hit!" />

<FoodCard
          imgUrl="https://img.freepik.com/premium-photo/bowl-ice-cream-with-green-white-top_978209-319.jpg"
          title="Pista Flavor"
          description=" Pista Ice Cream is a yummy, flavoursome dessert made by blending fresh cream with powdered." />


      </div>
    </div>
  )
}

export default Home