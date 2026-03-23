import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopNav = ({ searchQuery, onSearchChange }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center py-4 px-6 md:px-8 shrink-0 relative z-10 w-full">
      {/* Logo Area */}
      <div
        className="flex items-center gap-2 md:w-[280px] cursor-pointer select-none"
        onClick={() => navigate('/')}
      >
        <span
          className="text-orange-500 font-bold text-xl material-symbols-outlined shrink-0"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          music_note
        </span>
        <span className="text-lg font-bold tracking-tight text-white hidden sm:block">Moodify</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-auto flex items-center h-10 bg-[#1e1e1e]/80 hover:bg-[#252525] border border-white/5 focus-within:border-gray-500 focus-within:bg-[#252525] rounded-full transition-all px-4">
        <span className="material-symbols-outlined text-gray-500 text-sm mr-2 select-none">search</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter songs by title or mood"
          className="bg-transparent border-none outline-none text-sm text-gray-200 w-full placeholder:text-gray-500 placeholder:font-medium"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="text-gray-500 hover:text-gray-300 transition-colors ml-1"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        )}
      </div>

      {/* Right Spacer */}
      <div className="hidden md:block w-[280px]"></div>
    </nav>
  );
};

export default TopNav;
