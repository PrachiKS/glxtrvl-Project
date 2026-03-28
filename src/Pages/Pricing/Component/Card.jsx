import React from 'react';
import SingleCard from './SingleCard';

const Card = () => {

  const data = [
    {
      id: 1,
      heading: "Basic",
      Line1: "5 Lakhs",
      Line2: "No Unlimited Access!",
      Line3: "No Food"
    },
    {
      id: 1,
      heading: "Medium",
      Line1: "10 Lakhs",
      Line2: "Unlimited Access!",
      Line3: "No Food"
    },
    {
      id: 1,
      heading: "Premium",
      Line1: "20 Lakhs",
      Line2: "Unlimited Access!",
      Line3: "Food"
    },

  ]
  return (
    <>
      <h1 className="Heading">Pricing</h1>
      <section className="cards">
        {
          data.map((item) => {
            const { id, heading, Line1, Line2, Line3 } = item;
            return (
              <SingleCard heading={heading} 
              Line1={Line1} 
              Line2={Line2} 
              Line3={Line3} 
              />
            )
          })
        }
      </section>
    </>
  )
}

export default Card