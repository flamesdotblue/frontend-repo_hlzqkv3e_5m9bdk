import React from 'react';
import { Home, Star, Search, User } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="sticky bottom-0 left-0 right-0 z-10 mx-auto max-w-md border-t border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2 px-6 py-3 text-xs text-gray-600">
        <button className="flex flex-col items-center gap-1 text-indigo-600">
          <Home className="h-5 w-5" />
          <span>Feed</span>
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-gray-900">
          <Search className="h-5 w-5" />
          <span>Search</span>
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-gray-900">
          <Star className="h-5 w-5" />
          <span>Rank</span>
        </button>
        <button className="flex flex-col items-center gap-1 hover:text-gray-900">
          <User className="h-5 w-5" />
          <span>Me</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
