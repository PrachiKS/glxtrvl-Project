import React from 'react';
import SingleCard from './SingleCard';

const Card = () => {
  return (
    <>
      <h1 className="Heading">Pricing</h1>
    <section className="cards">
      <SingleCard/>
      <SingleCard/> <SingleCard/>
    </section>
    </>
  )
}

export default Card