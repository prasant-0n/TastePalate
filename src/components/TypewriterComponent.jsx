import React, { useState, useEffect } from "react";

const TypewriterComponent = ({ strings, options }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!strings || strings.length === 0) {
      return; // Do nothing if strings is undefined or empty
    }

    let isMounted = true;

    const typeText = () => {
      if (isMounted) {
        const currentString = strings[currentIndex];
        if (!currentString) {
          return; // Skip if currentString is undefined
        }

        setText(currentString.substring(0, text.length + 1));

        if (text.length === currentString.length) {
          setTimeout(() => deleteText(), options.delay || 500);
        } else {
          setTimeout(() => typeText(), options.delay || 100);
        }
      }
    };

    const deleteText = () => {
      if (isMounted) {
        const currentString = strings[currentIndex];
        if (!currentString) {
          return; // Skip if currentString is undefined
        }

        setText(text.substring(0, text.length - 1));

        if (text.length === 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
          setTimeout(() => typeText(), options.delay || 500);
        } else {
          setTimeout(() => deleteText(), options.deleteSpeed || 50);
        }
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, [text, strings, currentIndex, options]);

  return <>{text}</>;
};

export default TypewriterComponent;
