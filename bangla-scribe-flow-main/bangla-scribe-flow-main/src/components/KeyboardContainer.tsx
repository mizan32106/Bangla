
import React, { useState, useEffect } from 'react';
import EnglishKeyboard from './EnglishKeyboard';
import BengaliKeyboard from './BengaliKeyboard';
import EmojiPicker from './EmojiPicker';
import GifPicker from './GifPicker';
import VoiceInput from './VoiceInput';
import Settings from './Settings';
import { Settings as SettingsIcon, X } from 'lucide-react';
import { Button } from './ui/button';

type KeyboardContainerProps = {
  onClose: () => void;
};

const KeyboardContainer: React.FC<KeyboardContainerProps> = ({ onClose }) => {
  const [isLanguageBengali, setIsLanguageBengali] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [showVoiceInput, setShowVoiceInput] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [shouldCapitalize, setShouldCapitalize] = useState(false);
  const [settings, setSettings] = useState({
    soundEnabled: false,
    vibrationEnabled: false,
    keyboardTheme: 'default',
    keySize: 50,
    defaultLanguage: 'english',
    autoCapitalize: true,
  });
  
  // Apply theme based on settings
  const getKeyboardThemeClass = () => {
    switch(settings.keyboardTheme) {
      case 'dark':
        return 'bg-gray-900 text-white border-gray-700';
      case 'light':
        return 'bg-white text-gray-900 border-gray-200';
      case 'colorful':
        return 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-purple-700';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'; // default theme
    }
  };
  
  useEffect(() => {
    // Initialize language based on settings
    setIsLanguageBengali(settings.defaultLanguage === 'bengali');
  }, [settings.defaultLanguage]);

  const handleKeyPress = (value: string) => {
    setInputText(prev => {
      // Auto-capitalize if enabled and we're at the start of a sentence
      if (settings.autoCapitalize && shouldCapitalize && /[a-z]/.test(value)) {
        setShouldCapitalize(false);
        return prev + value.toUpperCase();
      }
      return prev + value;
    });
  };

  const handleBackspace = () => {
    setInputText(prev => prev.slice(0, -1));
  };

  const handleSpace = () => {
    setInputText(prev => prev + ' ');
  };

  const handleReturn = () => {
    setInputText(prev => {
      setShouldCapitalize(true);
      return prev + '\n';
    });
  };

  const toggleLanguage = () => {
    setIsLanguageBengali(prev => !prev);
  };

  const handleEmojiSelect = (emoji: string) => {
    setInputText(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleGifSelect = (gifUrl: string) => {
    // In a real app, this would insert the GIF or a reference to it
    console.log('Selected GIF:', gifUrl);
    setInputText(prev => prev + ' [GIF inserted] ');
    setShowGifPicker(false);
  };

  const handleVoiceInput = (text: string) => {
    setInputText(prev => prev + text);
    setShowVoiceInput(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(prev => !prev);
    setShowGifPicker(false);
    setShowVoiceInput(false);
  };

  const toggleGifPicker = () => {
    setShowGifPicker(prev => !prev);
    setShowEmojiPicker(false);
    setShowVoiceInput(false);
  };

  const toggleVoiceInput = () => {
    setShowVoiceInput(prev => !prev);
    setShowEmojiPicker(false);
    setShowGifPicker(false);
  };

  const toggleSettings = () => {
    setShowSettings(prev => !prev);
  };

  const handleSettingChange = (setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  // Check if we should capitalize the next letter (after a period, question mark, etc.)
  useEffect(() => {
    if (settings.autoCapitalize && inputText) {
      const lastChar = inputText.slice(-1);
      setShouldCapitalize(
        lastChar === '.' || 
        lastChar === '!' || 
        lastChar === '?' || 
        lastChar === '\n' || 
        inputText.length === 0
      );
    }
  }, [inputText, settings.autoCapitalize]);

  // Initialize shouldCapitalize to true when the component mounts
  useEffect(() => {
    setShouldCapitalize(true);
  }, []);

  return (
    <div className={`keyboard-container border-t shadow-lg ${getKeyboardThemeClass()}`}>
      <div className={`flex items-center justify-between px-4 py-2 border-b ${getKeyboardThemeClass()}`}>
        <Button variant="ghost" size="icon" onClick={toggleSettings} className={settings.keyboardTheme === 'dark' ? 'text-white' : ''}>
          <SettingsIcon size={20} />
        </Button>
        <span className="text-sm font-medium">
          {isLanguageBengali ? 'বাংলা স্ক্রাইব' : 'Bangla Scribe Flow'}
        </span>
        <Button variant="ghost" size="icon" onClick={onClose} className={settings.keyboardTheme === 'dark' ? 'text-white' : ''}>
          <X size={20} />
        </Button>
      </div>
      
      <div className={`w-full p-2 max-h-[120px] overflow-y-auto ${settings.keyboardTheme === 'dark' ? 'bg-gray-800 text-white' : settings.keyboardTheme === 'light' ? 'bg-gray-50' : settings.keyboardTheme === 'colorful' ? 'bg-blue-50' : 'bg-gray-50'}`}>
        <div className={`text-base ${isLanguageBengali ? 'bengali-text' : ''}`}>
          {inputText || <span className={`${settings.keyboardTheme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`}>Type something...</span>}
        </div>
      </div>

      {showEmojiPicker && (
        <EmojiPicker onEmojiSelect={handleEmojiSelect} onClose={() => setShowEmojiPicker(false)} />
      )}

      {showGifPicker && (
        <GifPicker onGifSelect={handleGifSelect} onClose={() => setShowGifPicker(false)} />
      )}

      {showVoiceInput && (
        <VoiceInput 
          onVoiceInputReceived={handleVoiceInput} 
          isLanguageBengali={isLanguageBengali}
          onClose={() => setShowVoiceInput(false)}
        />
      )}
      
      {!showEmojiPicker && !showGifPicker && !showVoiceInput && (
        isLanguageBengali ? (
          <BengaliKeyboard
            onKeyPress={handleKeyPress}
            onBackspace={handleBackspace}
            onSpace={handleSpace}
            onReturn={handleReturn}
            toggleLanguage={toggleLanguage}
            isLanguageBengali={isLanguageBengali}
            onEmojiClick={toggleEmojiPicker}
            onGifClick={toggleGifPicker}
            onVoiceClick={toggleVoiceInput}
          />
        ) : (
          <EnglishKeyboard
            onKeyPress={handleKeyPress}
            onBackspace={handleBackspace}
            onSpace={handleSpace}
            onReturn={handleReturn}
            toggleLanguage={toggleLanguage}
            isLanguageBengali={isLanguageBengali}
            onEmojiClick={toggleEmojiPicker}
            onGifClick={toggleGifPicker}
            onVoiceClick={toggleVoiceInput}
          />
        )
      )}

      <Settings 
        isOpen={showSettings} 
        onClose={toggleSettings} 
        settings={settings}
        onSettingChange={handleSettingChange}
      />
    </div>
  );
};

export default KeyboardContainer;
