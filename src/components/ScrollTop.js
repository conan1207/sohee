import React, {useState} from 'react';
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/ScrollTop.scss";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false);
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);

    return (
        <div>
            <FontAwesomeIcon icon={faArrowAltCircleUp} className="scrollTop" onClick={scrollTop} size="3x" style={{display: showScroll ? 'block' : 'none'}} />
        </div>
    );
};

export default ScrollTop;