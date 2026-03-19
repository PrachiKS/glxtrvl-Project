import React from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'; // From Font Awesome
import { useState } from "react";

const Faq = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (i) => {
    // 2. If the same index is clicked again, close it (set to null)
    // Otherwise, set it to the new index
    if (clickedIndex === i) {
      return setClickedIndex(null);
    }
    setClickedIndex(i);
  };

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
            data.map((item, i) => {
              return (
                <div className="wrapper" key={i}>
                  <div className="question" onClick={() => handleClick(i)}>
                    <h3>{item.question}</h3>
                    <div className="Arrow">
                      {clickedIndex === i ? (
                        <FaChevronCircleUp style={{ color: "white" }} size={25} />
                      ) : (
                        <FaChevronCircleDown style={{ color: "white" }} size={25} />
                      )}
                    </div>
                  </div>
                  <div className={`answers ${clickedIndex === i ? 'show' : ''}`}>
                    <div className="content-inner">
                      <p>{item.answers}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Faq;
