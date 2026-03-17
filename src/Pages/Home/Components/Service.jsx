import React, { useRef } from 'react';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.jpg';
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpg';
import img8 from '../../../assets/img8.jpg';
import img9 from '../../../assets/img9.jpg';

const Service = () => {
  const sliderRef = useRef(null);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const slideLeft = () => {
    // Scrolls the width of the container to show the next set of images
    sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
  };

  return (
    <div className="Service-Section">
      <h1 className="Heading">Services</h1>
      
      <div className="Slider-Container">
        <button className="Arrow Left-Arrow" onClick={slideLeft}>&#10094;</button>
        
        <div className="Service-Slider" ref={sliderRef}>
          {images.map((image, index) => (
            <div className="Service-Card" key={index}>
               <img src={image} alt={`Service ${index + 1}`} />
               {/* Optional: You can add <h3>Title</h3> here later */}
            </div>
          ))}
        </div>

        <button className="Arrow Right-Arrow" onClick={slideRight}>&#10095;</button>
      </div>
    </div>
  );
};

export default Service;