
import React from 'react';
import { Smile, X } from 'lucide-react';
import { Button } from './ui/button';

const EMOJI_CATEGORIES = {
  'Smileys & People': ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩'],
  'Animals & Nature': ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄'],
  'Food & Drink': ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🥦', '🥬', '🌭', '🍔', '🍟', '🍕', '🥪', '🥙', '🌮', '🌯', '🍣'],
  'Activities': ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🏓', '🏸', '🥅', '🏒', '🏑', '🥍', '🏏', '⛳', '🏹', '🎣', '🥊', '🥋', '🎽', '⛸️', '🥌', '🛹', '🛷', '⛷️', '🏂', '🏋️‍♂️'],
  'Travel & Places': ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🛴', '🚲', '🛵', '🏍️', '🚨', '🚔', '🚍', '🚘', '🚖', '✈️', '🚀', '🛸', '🚁', '🛶', '⛵', '🚤', '🚢'],
  'Objects': ['⌚', '📱', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️'],
  'Symbols': ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉'],
  'Flags': ['🏁', '🚩', '🎌', '🏴', '🏳️', '🏳️‍🌈', '🏴‍☠️', '🇦🇨', '🇦🇩', '🇦🇪', '🇦🇫', '🇦🇬', '🇦🇮', '🇦🇱', '🇦🇲', '🇦🇴', '🇦🇷', '🇦🇸', '🇦🇹', '🇦🇺', '🇦🇼', '🇦🇽', '🇦🇿', '🇧🇦', '🇧🇧', '🇧🇩', '🇧🇪', '🇧🇫', '🇧🇬', '🇧🇭'],
};

type EmojiPickerProps = {
  onEmojiSelect: (emoji: string) => void;
  onClose: () => void;
};

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onEmojiSelect, onClose }) => {
  const [activeCategory, setActiveCategory] = React.useState<string>('Smileys & People');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const filteredEmojis = React.useMemo(() => {
    if (!searchQuery) {
      return EMOJI_CATEGORIES[activeCategory as keyof typeof EMOJI_CATEGORIES];
    }
    
    // Search across all categories
    let results: string[] = [];
    Object.values(EMOJI_CATEGORIES).forEach(categoryEmojis => {
      results = [...results, ...categoryEmojis];
    });
    
    // Simple filtering - in a real app you'd use a proper emoji search library
    return results.slice(0, 30); // Just return first 30 for demo purposes
  }, [activeCategory, searchQuery]);

  return (
    <div className="emoji-picker bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 h-[280px] w-full border border-gray-300 dark:border-gray-700">
      <div className="flex justify-between items-center mb-2 border-b pb-2">
        <h3 className="text-sm font-medium">Emoji</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X size={18} />
        </Button>
      </div>

      <div className="categories-nav flex overflow-x-auto mb-2 pb-1 scrollbar-hide">
        {Object.keys(EMOJI_CATEGORIES).map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "ghost"}
            size="sm"
            className="text-xs whitespace-nowrap mr-1 h-7 px-2"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="emojis-container h-[200px] overflow-y-auto p-1">
        <div className="grid grid-cols-8 gap-1">
          {filteredEmojis.map((emoji) => (
            <button
              key={emoji}
              className="emoji-btn h-8 w-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              onClick={() => onEmojiSelect(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmojiPicker;
