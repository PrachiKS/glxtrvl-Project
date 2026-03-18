import React from "react";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // From Font Awesome
import { useState } from "react";

const Faq = () => {
const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  } 

  const data = [
    {
      question: "Question 1?",
      answers:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis soluta commodi porro, adipisci tempora repellendus blanditiis laudantium minus quibusdam quod labore consequatur. Sequi pariatur et itaque, minus provident minima.",
    },
    {
      question: "Question 2?",
      answers:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis soluta commodi porro, adipisci tempora repellendus blanditiis laudantium minus quibusdam quod labore consequatur. Sequi pariatur et itaque, minus provident minima.",
    },
    {
      question: "Question 3?",
      answers:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis soluta commodi porro, adipisci tempora repellendus blanditiis laudantium minus quibusdam quod labore consequatur. Sequi pariatur et itaque, minus provident minima.",
    },
    {
      question: "Question 4?",
      answers:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis soluta commodi porro, adipisci tempora repellendus blanditiis laudantium minus quibusdam quod labore consequatur. Sequi pariatur et itaque, minus provident minima.",
    },
    {
      question: "Question 5?",
      answers:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis soluta commodi porro, adipisci tempora repellendus blanditiis laudantium minus quibusdam quod labore consequatur. Sequi pariatur et itaque, minus provident minima.",
    },
    {
      question: "Question 6?",
      answers:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis soluta commodi porro, adipisci tempora repellendus blanditiis laudantium minus quibusdam quod labore consequatur. Sequi pariatur et itaque, minus provident minima.",
    }
  ];
  return (
    <>
      <h1 className="Heading">FAQs</h1>
      <section className="faq">
        <div className="item">
          {
            data.map((item) => {
              return (
                <>
                  <div className="question" key={item.question}>
                    <h3>{item.question}</h3>
                    <div className="hamburger" onClick={handleClick}>
                            {
                            
                            click ? (
                              <FaArrowUp style={{color : "white"}} size={25}/>
                            ):(
                              <FaArrowDown style={{color : "white"}} size={25}/>
                            )
                            }
                  </div>
                  </div>

                  <div className="answers" key={item.answers}>
                    <p>{item.answers}</p>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Faq;
