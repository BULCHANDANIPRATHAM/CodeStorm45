import React, { useEffect } from 'react';

const SpeechReaderWrapper = ({ children }) => {

  // Function to handle the speech synthesis
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech synthesis not supported in this browser.");
    }
  };

  // Event listener for handling clicks/taps
  const handleTap = (event) => {
    const target = event.target;
    
    // Check if the target has any readable text content
    if (target && target.textContent) {
      const text = target.textContent.trim();
      if (text) {
        speakText(text);
      }
    }
  };

  useEffect(() => {
    // Add the event listener to capture taps/clicks
    document.addEventListener('click', handleTap);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleTap);
    };
  }, []);

  return <div>{children}</div>;
};

export default SpeechReaderWrapper;
