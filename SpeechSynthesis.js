import React, { useState } from 'react';
import './SpeechSynthesis.css'
const SpeechSynthesis = () => {
  const [text, setText] = useState('');

  // Function to handle text-to-speech
  const speakText = () => {
    if (text.trim() !== '') {
      // Create a new SpeechSynthesisUtterance instance
      const utterance = new SpeechSynthesisUtterance(text);

      // Optional: Set voice, pitch, and rate for customization
      const voices = window.speechSynthesis.getVoices();
      utterance.voice = voices[0] || null; // Use the default voice
      utterance.pitch = 1; // Set pitch (range: 0.1 - 2, default is 1)
      utterance.rate = 1;  // Set rate (range: 0.1 - 10, default is 1)

      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Please enter some text to speak.');
    }
  };

  return (
    <div className="speech-recognition-container">
      <h1>React Text to Speech</h1>
      <textarea
        className="theme-text-area"
        rows="5"
        placeholder="Type text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="speech-recognition-button"
        onClick={speakText}
      >
        Speak
      </button>
      <p className="speech-recognition-status">
        {text ? 'Click "Speak" to hear the text.' : 'Please enter some text to speak.'}
      </p>
    </div>
  );
};

export default SpeechSynthesis;
