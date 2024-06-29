import React, { useState } from "react";
import { FaHandPointDown, FaHandPointUp } from "react-icons/fa";

const Faq = (props) => {
  const [isClose, setisClose] = useState(true);
  const handleClick = () => {
    setisClose(!isClose);
  };
  return (
    <>
        <div className={isClose ? "java" : "javaactive"} onClick={handleClick}>
          <p className="language">{props.eachdata.Q}</p>
          <span className="icon">
            {isClose ? <FaHandPointDown /> : <FaHandPointUp />}
          </span>
        </div>
        {isClose ? (
          ""
        ) : (
          <div className="content">
            <p className="para">{props.eachdata.A}</p>
          </div>
        )}
    
    </>

  );
};

export default Faq;
