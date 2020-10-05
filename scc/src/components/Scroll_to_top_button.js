import React from 'react';
// import { useWindowScroll } from "react-use";
import '../css/Scroll_to_top_button.css';
import { FaAngleUp } from "react-icons/fa";



const Scroll_to_top_button = () => {
    // const { y: pageYOffset } = useWindowScroll();
    
  const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    return (
      <div>
          <iconButton onClick= {handleClick} className="scroll-to-top cursor-pointer text-container">
            <FaAngleUp className="arrow1" />
          </iconButton>
      </div>
    );
};

export default Scroll_to_top_button;