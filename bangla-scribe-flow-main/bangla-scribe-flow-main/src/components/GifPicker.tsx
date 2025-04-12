
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const SAMPLE_GIFS = [
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHFnYnp3eDJ3dHd1MnR3cjdyYzRoanZpN3FrNGRuaDBtOXluNW9rNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKnO6Wve7QZPaN2/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFpNG9rOWt4OWQybTN6Y3RiaHZwZXo3MHZjeXdodHpmcXdseTl1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWsyeDFzemlrbzRsZ3N2NGpqMGZnb3Q3YWJnbTV2eXo5ZmFlbHkyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5GoVLqeAOo6PK/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDRvamdqY3pxODJjd3Z5cXA0bjFkOWZmajZ3NDI1eHkyYjB0cmNoZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXpnZGI4d3hjMmcxOTN5cjJnendpam9mMndueDFobnVha3h6aHR2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10UUe8ZsLnaqwo/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWJ0eHhoeGt0eDh1cW9yeGlqMXl6aG9saGMwM3Z2MGFqMzF6b2dxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46CyJmS9KUbID2wM/giphy.gif',
  // New GIFs added
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnkzanVtNmdtMDJzM2JzcGp0ajltdW1zZzR6ZWR5MG5tYnVnYm9mZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yJFeycRK2DB4c/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2E3MWJjZXZ0OTA1MnMwdXQxamZlbnJid3oxYnlzaWYwcXFuem13ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btPCwlPuACp17Ik/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmsxbnhwZGtrNHc0N3Q1dmpiY2MzNnhvN3E5dzllam8zYXJjZXg0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DhstvI3zZ598Nb1rFf/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXMzajY0b3V1cnlyOGNnbHIyZTV5cXVsNGw3eGkwdWQ0YWx2YnJ2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2uInJRfmCyXoDf4lnT/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzZmbWIxbW9oZ2VvYXBlYWpuMjhqYWVxNDJoaWJ0ZG95bmc2aGJuciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QMHoU66sBXqqLqYvGO/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWY5Mjg0N2NzZW8xY2l4c2dhMWdwdTE0aDJsajJ0dmJqbjdlZ2kyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tsX3YMWYzDPjAARfeg/giphy.gif',
];

// Category-based GIFs for better organization
const GIF_CATEGORIES = {
  'Reactions': [
    'https://media.giphy.com/media/3o7TKnO6Wve7QZPaN2/giphy.gif',
    'https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif',
    'https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif',
    'https://media.giphy.com/media/yJFeycRK2DB4c/giphy.gif',
  ],
  'Animals': [
    'https://media.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.gif',
    'https://media.giphy.com/media/2uInJRfmCyXoDf4lnT/giphy.gif',
    'https://media.giphy.com/media/3o7btPCwlPuACp17Ik/giphy.gif',
    'https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif',
  ],
  'Entertainment': [
    'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
    'https://media.giphy.com/media/10UUe8ZsLnaqwo/giphy.gif',
    'https://media.giphy.com/media/l46CyJmS9KUbID2wM/giphy.gif',
    'https://media.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif',
  ]
};

type GifPickerProps = {
  onGifSelect: (gifUrl: string) => void;
  onClose: () => void;
};

const GifPicker: React.FC<GifPickerProps> = ({ onGifSelect, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would search for GIFs using an API
    console.log('Searching for:', searchQuery);
  };

  // Display either category GIFs or all GIFs
  const displayGifs = activeCategory ? GIF_CATEGORIES[activeCategory as keyof typeof GIF_CATEGORIES] : SAMPLE_GIFS;

  return (
    <div className="gif-picker bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 h-[350px] w-full border border-gray-300 dark:border-gray-700">
      <div className="flex justify-between items-center mb-2 border-b pb-2">
        <h3 className="text-sm font-medium">GIFs</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X size={18} />
        </Button>
      </div>

      <form onSubmit={handleSearch} className="mb-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input
            placeholder="Search GIFs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 py-1 h-8 text-sm"
          />
        </div>
      </form>

      <div className="categories-nav flex overflow-x-auto mb-2 pb-1 scrollbar-hide">
        <Button
          variant={activeCategory === null ? "default" : "ghost"}
          size="sm"
          className="text-xs whitespace-nowrap mr-1 h-7 px-2"
          onClick={() => setActiveCategory(null)}
        >
          All
        </Button>
        {Object.keys(GIF_CATEGORIES).map((category) => (
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

      <div className="gifs-container h-[230px] overflow-y-auto grid grid-cols-2 gap-2">
        {displayGifs.map((gifUrl, index) => (
          <div
            key={index}
            className="gif-item h-24 relative overflow-hidden rounded cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onGifSelect(gifUrl)}
          >
            <img
              src={gifUrl}
              alt={`GIF ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-xs text-center mt-2 text-gray-500">
        Powered by GIPHY
      </div>
    </div>
  );
};

export default GifPicker;
