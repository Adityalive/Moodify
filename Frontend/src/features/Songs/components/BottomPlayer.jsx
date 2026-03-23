import React, { useRef } from 'react';
import useSongs from '../hooks/Songhook';

// Format seconds -> m:ss
function fmt(secs) {
  if (!secs || isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const BottomPlayer = () => {
  const {
    currentSong,
    songs,
    currentIndex,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    seek,
    goNext,
    goPrev,
  } = useSongs();

  const progressRef = useRef(null);
  const hasSong = Boolean(currentSong);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  function handleProgressClick(e) {
    if (!hasSong || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    seek(Math.max(0, Math.min(ratio * duration, duration)));
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[80px] bg-[#121212] border-t border-white/5 flex items-center justify-between px-6 z-50">

      {/* Left: Track Info */}
      <div className="flex items-center w-[30%] min-w-[180px] gap-3">
        <div className="w-10 h-10 rounded overflow-hidden bg-gray-800 shrink-0">
          {currentSong?.posterUrl ? (
            <img
              src={currentSong.posterUrl}
              className="w-full h-full object-cover"
              alt="Album Cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-600 text-sm">music_note</span>
            </div>
          )}
        </div>
        <div className="flex flex-col min-w-0">
          <h4 className="text-white text-sm font-semibold truncate max-w-[160px]">
            {currentSong?.title || 'No song selected'}
          </h4>
          <p className="text-gray-500 text-xs capitalize truncate">
            {currentSong?.mood || '—'}
          </p>
        </div>
      </div>

      {/* Center: Controls + Progress */}
      <div className="flex flex-col items-center justify-center flex-1 max-w-[46%] gap-2">
        {/* Playback Buttons */}
        <div className="flex items-center gap-5 text-gray-300">
          <button
            onClick={goPrev}
            disabled={songs.length === 0}
            className="hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">skip_previous</span>
          </button>

          <button
            onClick={togglePlayPause}
            disabled={!hasSong}
            className="w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-500 flex items-center justify-center text-white transition-transform active:scale-95 shadow-lg shadow-orange-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          <button
            onClick={goNext}
            disabled={songs.length === 0}
            className="hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">skip_next</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full px-2">
          <span className="text-gray-500 text-[11px] font-mono w-8 text-right shrink-0">{fmt(currentTime)}</span>
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className={`flex-1 h-1 bg-gray-800 rounded-full relative group ${hasSong ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <div
              className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow translate-x-1/2" />
            </div>
          </div>
          <span className="text-gray-500 text-[11px] font-mono w-8 shrink-0">{fmt(duration)}</span>
        </div>
      </div>

      {/* Right: Track counter */}
      <div className="flex items-center justify-end gap-3 w-[30%] min-w-[160px] text-gray-400">
        {songs.length > 0 ? (
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-xs font-medium text-white">
              {currentIndex + 1} / {songs.length}
            </span>
          </div>
        ) : (
          <p className="text-gray-600 text-xs">Detect a mood to start</p>
        )}
      </div>
    </div>
  );
};

export default BottomPlayer;
