import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import useSongs from '../hooks/Songhook';

const UserSidebar = () => {
  const { user } = useContext(AuthContext);
  const { songs, library, removeSong } = useSongs();

  const displayName = user?.name || user?.username || user?.email?.split('@')[0] || 'Guest';
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="w-full lg:w-[320px] flex flex-col gap-6 shrink-0 h-full overflow-y-auto no-scrollbar pb-6">
      {/* User Profile Card */}
      <div className="bg-[#151515] border border-white/5 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-xl font-bold text-white shrink-0">
            {initial}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{displayName}</h3>
            <p className="text-gray-400 text-sm">Logged in</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 bg-[#1a1a1a] rounded-xl p-3 border border-white/5">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Library</span>
            <span className="text-white font-bold text-lg">{library.length}</span>
          </div>
          <div className="flex-1 bg-[#1a1a1a] rounded-xl p-3 border border-white/5">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Queue</span>
            <span className="text-white font-bold text-lg">{songs.length}</span>
          </div>
        </div>
      </div>

      {/* Your Library Card */}
      <div className="bg-[#151515] border border-white/5 rounded-2xl p-5 shadow-lg flex-1 flex flex-col min-h-[300px]">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-white font-bold text-lg">Your Library</h3>
          <span className="text-gray-500 text-xs">
            {library.length} {library.length === 1 ? 'song' : 'songs'}
          </span>
        </div>

        {library.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <span
              className="material-symbols-outlined text-gray-600 text-5xl mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              library_books
            </span>
            <p className="text-gray-400 text-sm">
              Your library is empty.<br />Save songs from your playlist to see them here.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2 flex-1 overflow-y-auto no-scrollbar">
            {library.map((song, i) => (
              <div
                key={song._id || song.title || i}
                className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 shrink-0 overflow-hidden">
                  {song.posterUrl ? (
                    <img src={song.posterUrl} className="w-full h-full object-cover" alt={song.title} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-600 text-sm">music_note</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{song.title}</p>
                  <p className="text-gray-500 text-xs capitalize">{song.mood}</p>
                </div>
                <button
                  onClick={() => removeSong(song)}
                  title="Remove from library"
                  className="text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSidebar;
