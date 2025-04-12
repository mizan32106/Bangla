
import React from 'react';
import KeyboardRow from './KeyboardRow';
import KeyboardKey from './KeyboardKey';
import { Delete, Mic, Smile, Image } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

type EnglishKeyboardProps = {
  onKeyPress: (value: string) => void;
  onBackspace: () => void;
  onSpace: () => void;
  onReturn: () => void;
  toggleLanguage: () => void;
  isLanguageBengali: boolean;
  onEmojiClick: () => void;
  onGifClick: () => void;
  onVoiceClick: () => void;
};

const EnglishKeyboard: React.FC<EnglishKeyboardProps> = ({
  onKeyPress,
  onBackspace,
  onSpace,
  onReturn,
  toggleLanguage,
  isLanguageBengali,
  onEmojiClick,
  onGifClick,
  onVoiceClick,
}) => {
  return (
    <div className="p-1 bg-keyboard-background">
      <KeyboardRow>
        <KeyboardKey label="q" value="q" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="w" value="w" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="e" value="e" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="r" value="r" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="t" value="t" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="y" value="y" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="u" value="u" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="i" value="i" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="o" value="o" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="p" value="p" onKeyPress={onKeyPress} className="flex-1" />
      </KeyboardRow>
      
      <KeyboardRow className="px-2">
        <KeyboardKey label="a" value="a" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="s" value="s" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="d" value="d" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="f" value="f" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="g" value="g" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="h" value="h" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="j" value="j" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="k" value="k" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="l" value="l" onKeyPress={onKeyPress} className="flex-1" />
      </KeyboardRow>
      
      <KeyboardRow>
        <KeyboardKey 
          label="⇧" 
          value="shift" 
          onKeyPress={() => {}} 
          isSpecial={true} 
          className="flex-[1.5]" 
        />
        <KeyboardKey label="z" value="z" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="x" value="x" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="c" value="c" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="v" value="v" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="b" value="b" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="n" value="n" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="m" value="m" onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey 
          label={<Delete size={18} />} 
          value="backspace" 
          onKeyPress={onBackspace} 
          isSpecial={true} 
          className="flex-[1.5]" 
        />
      </KeyboardRow>
      
      <KeyboardRow>
        <KeyboardKey 
          label="123" 
          value="numbers" 
          onKeyPress={() => {}} 
          isSpecial={true} 
          className="flex-[1.5]" 
        />
        <LanguageToggle 
          isLanguageBengali={isLanguageBengali} 
          toggleLanguage={toggleLanguage} 
        />
        <KeyboardKey 
          label={<Mic size={18} />} 
          value="voice" 
          onKeyPress={onVoiceClick} 
          isSpecial={true} 
          className="flex-1" 
        />
        <KeyboardKey 
          label=" " 
          value=" " 
          onKeyPress={onSpace} 
          className="flex-[4]" 
        />
        <KeyboardKey 
          label={<Smile size={18} />} 
          value="emoji" 
          onKeyPress={onEmojiClick} 
          isSpecial={true} 
          className="flex-1" 
        />
        <KeyboardKey 
          label={<Image size={18} />} 
          value="gif" 
          onKeyPress={onGifClick} 
          isSpecial={true} 
          className="flex-1" 
        />
        <KeyboardKey 
          label="⏎" 
          value="return" 
          onKeyPress={onReturn} 
          isSpecial={true} 
          className="flex-1" 
        />
      </KeyboardRow>
    </div>
  );
};

export default EnglishKeyboard;
