import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";

const SliderBox = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      reversed: false,
    });
    tl.from(["#slide-box", "#slide-box-text"], 2, {
      y: 100,
      ease: Power3.easeOut,
    });
    tl.to(["#slide-box", "#slide-box-text"], 2, { opacity: 1 }, 0);
  }, []);

  return (
    <>
      <svg
        id="slide-box"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 200 1000 436"
      >
        <title>sliderbox</title>
        {/* <rect id="background" width="1125" height="2436" fill="#565656" /> */}
        <rect
          id="sliderBox"
          x="308"
          y="218"
          width="900"
          height="300"
          rx="45"
          fill="#fff"
          stroke="#000"
          stroke-miterlimit="10"
          stroke-width="10"
        />
      </svg>
      <div id="slide-box-text">
        This is what the headline is supposed to say.
      </div>
    </>
  );
};

export default SliderBox;
