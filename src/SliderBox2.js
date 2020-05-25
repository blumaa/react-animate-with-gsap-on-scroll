import React, { useEffect, useRef } from "react";
import { gsap, Power3, Back } from "gsap";

const SliderBox2 = () => {
  let box = useRef(null);
  let text = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      reversed: false,
    });
    tl.from([box.current, text.current], 2, {
      x: -700,
      ease: Back.easeOut,
    });
    tl.to([box.current, text.current], 2, { opacity: 1 }, 0);
  }, []);

  return (
    <>
      <svg
      ref={box}
        id="slide-box2"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 175 1125 400"
      >
        <title>sliderbox</title>
        {/* <rect id="background" width="1125" height="2436" fill="#565656" /> */}
        <rect
        
          id="sliderBox"
          x="83"
          y="229"
          width="959"
          height="300"
          rx="145"
          fill="#fff"
          stroke="#000"
          stroke-miterlimit="10"
          stroke-width="10"
        />
      </svg>

      <div id="slide-box2-text" ref={text}>
        This is what the headline is supposed to say.
      </div>
    </>
  );
};

export default SliderBox2;
