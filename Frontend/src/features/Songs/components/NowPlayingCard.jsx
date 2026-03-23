import React from 'react';
import useSongs from '../hooks/Songhook';

const NowPlayingCard = () => {
  const { currentSong, songs, currentIndex, saveSong, library } = useSongs();

  const isSaved = currentSong
    ? library.some(
        (s) =>
          (s._id && s._id === currentSong._id) ||
          s.title === currentSong.title
      )
    : false;

  return (
    <div className="bg-[#151515] border border-white/5 rounded-2xl p-5 shadow-lg relative overflow-hidden group">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="flex justify-between items-center mb-5 relative z-10">
        <h2 className="text-white font-bold text-lg">Now Playing</h2>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-wider">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
          LIVE
        </div>
      </div>

      {currentSong ? (
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-800 shrink-0 relative">
            {currentSong.posterUrl ? (
              <img
                src={currentSong.posterUrl}
                className="w-full h-full object-cover"
                alt={currentSong.title}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-500 text-2xl">music_note</span>
              </div>
            )}
            {/* Waveform overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-0.5">
              <div className="w-1 bg-white rounded-full h-3 animate-pulse"></div>
              <div className="w-1 bg-white rounded-full h-5 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1 bg-white rounded-full h-2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-base leading-tight truncate mb-1">
              {currentSong.title}
            </h3>
            <p className="text-gray-400 text-sm truncate capitalize mb-1">
              {currentSong.mood}
            </p>
            <span className="text-gray-500 text-xs">
              {currentIndex + 1} of {songs.length}
            </span>
          </div>
          <button
            onClick={() => saveSong(currentSong)}
            disabled={isSaved}
            title={isSaved ? 'Already saved' : 'Save to library'}
            className={`ml-2 px-4 py-2 rounded-full border text-sm transition-colors shrink-0 ${
              isSaved
                ? 'border-orange-500/40 text-orange-400 cursor-default'
                : 'border-white/10 text-gray-300 hover:bg-white/5'
            }`}
          >
            {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4 relative z-10 opacity-40">
          <div className="w-16 h-16 rounded-xl bg-gray-800 shrink-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-gray-500 text-2xl">music_note</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-400 text-sm">No song playing yet.</p>
            <p className="text-gray-600 text-xs mt-1">Use the mood detector to start</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NowPlayingCard;
