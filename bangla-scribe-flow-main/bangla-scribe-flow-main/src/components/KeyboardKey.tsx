
import React, { useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type KeyboardKeyProps = {
  label: string | ReactNode;
  value: string;
  bengaliValue?: string;
  isLanguageBengali?: boolean;
  className?: string;
  isSpecial?: boolean;
  onKeyPress: (value: string) => void;
};

const KeyboardKey: React.FC<KeyboardKeyProps> = ({
  label,
  value,
  bengaliValue,
  isLanguageBengali = false,
  className,
  isSpecial = false,
  onKeyPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onKeyPress(isLanguageBengali && bengaliValue ? bengaliValue : value);
    setTimeout(() => setIsPressed(false), 150);
  };

  return (
    <button
      type="button"
      className={cn(
        'key flex items-center justify-center rounded-lg shadow transition-all',
        isSpecial 
          ? 'bg-keyboard-specialKey text-keyboard-specialKeyText'
          : 'bg-keyboard-key text-keyboard-keyText border border-keyboard-keyBorder',
        isPressed && 'animate-key-press',
        className
      )}
      onTouchStart={handlePress}
      onClick={handlePress}
      aria-label={typeof label === 'string' ? label : value}
    >
      {isLanguageBengali && bengaliValue ? (
        <span className="bengali-text">{bengaliValue}</span>
      ) : (
        label
      )}
    </button>
  );
};

export default KeyboardKey;
