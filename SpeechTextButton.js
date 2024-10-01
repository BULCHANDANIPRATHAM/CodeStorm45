import React, { useEffect, useRef, useState } from 'react';
import { Mic } from 'lucide-react';
import './SpeechTextButton.css';

const SpeechTextButton = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState(''); // State to hold recognized text
    const recognitionRef = useRef(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.error("Speech Recognition API not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const currentTranscript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');

            setTranscript(currentTranscript); // Update the transcript state with recognized text
            console.log(currentTranscript);
        };

        recognition.onend = () => {
            console.log("Speech recognition service disconnected");
            setIsListening(false);
        };

        return () => {
            recognitionRef.current.stop();
        };
    }, []);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
            setIsListening(true);
            console.log("Listening...");
        }
    };

    return (
      <div className="speech-recognition-container">
          <button 
              className={`speech-recognition-button ${isListening ? 'listening' : ''}`}
              onClick={toggleListening}
              aria-label="Toggle speech recognition"
          >
              <Mic size={24} />
          </button>
          <p className="speech-recognition-status">
              {isListening ? "Listening..." : "Click to start listening"}
          </p>
          <div className="transcript-output">
              <strong>Recognized Text</strong>
              <p>{transcript || 'No speech recognized yet.'}</p>
          </div>
      </div>
  );
};

export default SpeechTextButton;
