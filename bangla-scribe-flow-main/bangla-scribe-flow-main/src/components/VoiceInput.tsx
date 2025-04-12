
import React, { useState, useEffect } from 'react';
import { Mic, MicOff, X } from 'lucide-react';
import { Button } from './ui/button';

// Add TypeScript declarations for the Web Speech API
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: any) => void;
  onend: () => void;
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

type VoiceInputProps = {
  onVoiceInputReceived: (text: string) => void;
  isLanguageBengali: boolean;
  onClose: () => void;
};

const VoiceInput: React.FC<VoiceInputProps> = ({ onVoiceInputReceived, isLanguageBengali, onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    // Check if browser supports the Web Speech API
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognitionAPI) {
      const recognitionInstance = new SpeechRecognitionAPI();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = isLanguageBengali ? 'bn-BD' : 'en-US';

      recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            currentTranscript += event.results[i][0].transcript + ' ';
          }
        }
        setTranscript(currentTranscript);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error', event);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [isLanguageBengali]);

  const toggleListening = () => {
    if (!recognition) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
      setTranscript('');
    }
  };

  const handleSubmit = () => {
    if (transcript.trim()) {
      onVoiceInputReceived(transcript.trim());
      onClose();
    }
  };

  return (
    <div className="voice-input bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full border border-gray-300 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">
          {isLanguageBengali ? 'ভয়েস ইনপুট' : 'Voice Input'}
        </h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X size={20} />
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center mb-4">
        <Button
          variant={isListening ? "destructive" : "default"}
          size="lg"
          className="rounded-full w-16 h-16 mb-2"
          onClick={toggleListening}
        >
          {isListening ? <MicOff size={24} /> : <Mic size={24} />}
        </Button>
        <p className="text-sm">
          {isListening ? 
            (isLanguageBengali ? 'বলা হচ্ছে...' : 'Listening...') : 
            (isLanguageBengali ? 'শুরু করতে ক্লিক করুন' : 'Click to start')
          }
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded p-3 min-h-[100px] mb-4 overflow-y-auto">
        {transcript ? transcript : (
          <p className="text-gray-400 italic text-center">
            {isLanguageBengali ? 'কথা বলুন...' : 'Speech will appear here...'}
          </p>
        )}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onClose}>
          {isLanguageBengali ? 'বাতিল করুন' : 'Cancel'}
        </Button>
        <Button 
          disabled={!transcript.trim()} 
          onClick={handleSubmit}
        >
          {isLanguageBengali ? 'ব্যবহার করুন' : 'Use Text'}
        </Button>
      </div>
    </div>
  );
};

export default VoiceInput;

