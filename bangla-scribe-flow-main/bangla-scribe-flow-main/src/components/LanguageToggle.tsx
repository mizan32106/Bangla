
import React from 'react';
import { Globe } from 'lucide-react';

type LanguageToggleProps = {
  isLanguageBengali: boolean;
  toggleLanguage: () => void;
};

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  isLanguageBengali,
  toggleLanguage,
}) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center h-10 min-w-[3rem] rounded-lg 
      ${isLanguageBengali 
        ? 'bg-keyboard-bengaliMode text-white' 
        : 'bg-keyboard-englishMode text-white'}`}
      onClick={toggleLanguage}
    >
      <div className="flex items-center space-x-1">
        <Globe size={16} />
        <span className="text-xs font-medium">
          {isLanguageBengali ? 'বাংলা' : 'EN'}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;
