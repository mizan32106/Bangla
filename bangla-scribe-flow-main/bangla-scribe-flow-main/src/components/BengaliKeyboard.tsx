
import React from 'react';
import KeyboardRow from './KeyboardRow';
import KeyboardKey from './KeyboardKey';
import { Delete, Mic, Smile, Image } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

type BengaliKeyboardProps = {
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

const BengaliKeyboard: React.FC<BengaliKeyboardProps> = ({
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
  // This is a simplified Bengali phonetic keyboard
  return (
    <div className="p-1 bg-keyboard-background">
      <KeyboardRow>
        <KeyboardKey label="q" value="q" bengaliValue="ঙ" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="w" value="w" bengaliValue="য" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="e" value="e" bengaliValue="ে" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="r" value="r" bengaliValue="র" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="t" value="t" bengaliValue="ট" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="y" value="y" bengaliValue="য়" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="u" value="u" bengaliValue="ু" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="i" value="i" bengaliValue="ি" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="o" value="o" bengaliValue="ো" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="p" value="p" bengaliValue="প" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
      </KeyboardRow>
      
      <KeyboardRow className="px-2">
        <KeyboardKey label="a" value="a" bengaliValue="া" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="s" value="s" bengaliValue="স" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="d" value="d" bengaliValue="দ" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="f" value="f" bengaliValue="ফ" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="g" value="g" bengaliValue="গ" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="h" value="h" bengaliValue="হ" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="j" value="j" bengaliValue="জ" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="k" value="k" bengaliValue="ক" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="l" value="l" bengaliValue="ল" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
      </KeyboardRow>
      
      <KeyboardRow>
        <KeyboardKey 
          label="⇧" 
          value="shift" 
          onKeyPress={() => {}} 
          isSpecial={true} 
          className="flex-[1.5]" 
        />
        <KeyboardKey label="z" value="z" bengaliValue="য" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="x" value="x" bengaliValue="ষ" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="c" value="c" bengaliValue="চ" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="v" value="v" bengaliValue="ভ" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="b" value="b" bengaliValue="ব" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="n" value="n" bengaliValue="ন" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
        <KeyboardKey label="m" value="m" bengaliValue="ম" isLanguageBengali={isLanguageBengali} onKeyPress={onKeyPress} className="flex-1" />
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

export default BengaliKeyboard;
