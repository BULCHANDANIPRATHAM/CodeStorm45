import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic } from 'lucide-react';
import './SpeechRecognitionButton.css';

const SpeechRecognitionButton = () => {
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef(null);
    const navigate = useNavigate();

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
            const transcript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');

            console.log(transcript);

            if (transcript.toLowerCase().includes('flight')) {
                navigate('/flights');
            }
            if (transcript.toLowerCase().includes('home')) {
                navigate('/');
            }
            if (transcript.toLowerCase().includes('train')) {
                navigate('/trains');
            }
            if (transcript.toLowerCase().includes('hotel')) {
                navigate('/hotels');
            }
            if (transcript.toLowerCase().includes('map')) {
                navigate('/map');
            }
            if (transcript.toLowerCase().includes('signup')) {
                navigate('/signup');
            }
            if (transcript.toLowerCase().includes('text to speech')) {
                navigate('/textToSpeech');
            }
            if (transcript.toLowerCase().includes('speech to text')) {
                navigate('/speechToText');
            }
        };

        recognition.onend = () => {
            console.log("Speech recognition service disconnected");
            setIsListening(false);
        };

        return () => {
            recognitionRef.current.stop();
        };
    }, [navigate]);

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
        <div>
            <button 
                className={`speech-recognition1-button ${isListening ? 'listening' : ''}`} 
                onClick={toggleListening}
                aria-label="Toggle speech recognition"
            >
                <Mic size={24} />
            </button>
            <span className="speech-recognition-status">
                {isListening ? "Listening..." : "Click to start listening"}
            </span>
        </div>
    );
};

export default SpeechRecognitionButton;