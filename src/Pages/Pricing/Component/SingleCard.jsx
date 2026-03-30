import React from 'react'

const SingleCard = ({heading, Line1, Line2, Line3}) => {
  return (
    <div className='card'>
        <h2>{heading}</h2>

        <div className="content">
            <p>{Line1}</p>
            <p>{Line2}</p>
            <p>{Line3}</p>
        </div>
    </div>
  );
};

export default SingleCard