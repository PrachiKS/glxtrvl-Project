import React, { useState } from "react";
import Modal from "./Modal";

const CallToAction = () => {
  const [modal, setmodal] = useState(false);

  const handleClick = () => {
    setmodal(!modal);
  };

  return (
    <>
      <section className="call-to-action">
        <h2>Hurry Up Book your Tickets !</h2>

        <button onClick={handleClick}>
          Know More!
        </button>
      </section>

      {modal && <Modal  handleClick={handleClick}/>}
    </>
  );
};

export default CallToAction;
