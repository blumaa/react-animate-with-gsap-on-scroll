import React, { useState, useEffect, useRef } from 'react';

// Usage
function App() {
  // Ref for the element that we want to detect whether on screen
  const sectionOneRef = useRef();
  const sectionTwoRef = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreenSectionOne = useOnScreen(sectionOneRef, '-300px');
  const onScreenSectionTwo = useOnScreen(sectionTwoRef, '-300px');

  return (
    <div>
      <div className="navbar-container">
        <div className="nav">
          <a>Page One</a>
          <a>Page Two</a>
          <a>Page Three</a>
          <a>Page Four</a>
          <a>Page Five</a>
        </div>
      </div>
      <div style={{ height: '100vh' }}>
        <h1>Scroll down to next section 👇</h1>
      </div>
      <div
        ref={sectionOneRef}
        style={{
          height: '100vh',
        }}
      >
        {onScreenSectionOne ? (
          <div>
            <h1>Hey I'm on the screen</h1>
          </div>
        ) : (
          null
        )}
      </div>
      <div
        ref={sectionTwoRef}
        style={{
          height: '100vh',
          backgroundColor: onScreenSectionTwo ? '#23cebd' : '#efefef'
        }}
      >
        {onScreenSectionTwo ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section 👇</h1>
        )}
      </div>
    </div>
  );
}

// Hook
function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
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

export default App