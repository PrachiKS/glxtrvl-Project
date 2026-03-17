import React from "react";
import glxImage from "../../../assets/glx.jpg";
const About = () => {
  return (
    <>
    <h1 className="Heading">About us</h1>
    <section className="about">
      <img src={glxImage} alt="Description of glx image" />
      <div className='content'>
        <h2>Lorem, ipsum dolor.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          error, totam sapiente est ducimus ex voluptates. Obcaecati delectus
          dolores fugiat dolor, illum veritatis corrupti cum consequatur sint,
          autem odit a.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          error, totam sapiente est ducimus ex voluptates. Obcaecati delectus
          dolores fugiat dolor, illum veritatis corrupti cum consequatur sint,
          autem odit a.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus perspiciatis necessitatibus iure explicabo, eligendi laboriosam aspernatur! Amet eius saepe veritatis eum possimus ipsam perferendis in! Non ratione molestiae nesciunt!</p>
      </div>
    </section>
    </>
  );
};

export default About;
