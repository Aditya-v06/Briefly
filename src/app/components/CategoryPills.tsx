import { useState } from 'react';

const categories = ['All', 'Tech', 'Finance', 'World', 'Sports', 'Politics', 'Health'];

export function CategoryPills() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            activeCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-accent text-accent-foreground hover:bg-muted'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
