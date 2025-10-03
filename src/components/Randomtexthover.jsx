import React, { useState, useRef, useEffect } from 'react';

const characters = "01";

const RandomTextHover = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const startAnimation = () => {
    let iteration = 0;
    const originalText = text;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(originalText.split('').map((char, index) => {
        if (index < iteration) {
          return originalText[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      }).join(''));

      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 50);
  };

  const stopAnimation = () => {
    clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="hover-text"
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
    >
      {displayText}
    </div>
  );
};

export default RandomTextHover;