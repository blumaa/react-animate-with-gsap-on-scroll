import React, { useState, useEffect, useRef } from "react";
import SliderBox from "./SliderBox";
import SliderBox2 from "./SliderBox2";
import DummyText from "./DummyText";
// Usage
function App() {
  const sectionOneRef = useRef();
  const sectionTwoRef = useRef();

  const onScreenSectionOne = useOnScreen(sectionOneRef, "-50%");
  const onScreenSectionTwo = useOnScreen(sectionTwoRef, "-300px");

  return (
    <div>
      <div id="section-home">
      <h1>Scroll down to see the animation 👇</h1>
        <DummyText />
      </div>
      <div className="section-one" ref={sectionOneRef}>
        {onScreenSectionOne ? (
          <SliderBox />
        ) : (
          <h1>Scroll down to see the animation 👇</h1>
        )}
      </div>
      <div className="section-two" ref={sectionTwoRef}>
        {onScreenSectionTwo ? (
          <SliderBox2 />
        ) : (
          <h1>Scroll down to see the animation 👇</h1>
        )}
      </div>
    </div>
  );
}

// Hook
function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

export default App;
