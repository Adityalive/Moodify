import React from "react";
import useSongs from "../hooks/Songhook";

const Playlist = ({ playlistType, songs = [], loading = false }) => {
  const { currentIndex, setCurrentIndex, saveSong, library, isPlaying, togglePlayPause } = useSongs();

  const hasPlaylist = Boolean(playlistType);
  const hasSongs = songs.length > 0;

  const helperText = !hasPlaylist
    ? "Detect an expression to generate a playlist."
    : loading
    ? `Looking for songs that match "${playlistType}".`
    : hasSongs
    ? ""
    : `No songs were returned for "${playlistType}" yet.`;

  return (
    <div className="w-full flex flex-col h-full text-gray-200">
      {helperText && (
        <div className="mb-4 text-sm text-gray-400">{helperText}</div>
      )}

      {!hasSongs && !loading && !hasPlaylist ? (
        <div className="mt-6 flex flex-col items-center justify-center p-6 text-center h-full">
          <span className="material-symbols-outlined text-4xl text-gray-600 mb-2">album</span>
          <p className="text-gray-400 text-sm">Use the detector to find your vibe.</p>
        </div>
      ) : loading ? (
        <div className="mt-6 flex flex-col items-center justify-center p-6 text-center h-full opacity-50">
          <div className="w-8 h-8 rounded-full border-2 border-orange-500 border-t-transparent animate-spin mb-4"></div>
          <p className="text-gray-400 text-sm">Fetching tracks...</p>
        </div>
      ) : hasSongs ? (
        <div className="flex flex-col gap-2 mt-4 pb-4">
          {songs.map((song, index) => {
            const isActive = index === currentIndex;
            const isSaved = library.some(
              (s) =>
                (s._id && s._id === song._id) || s.title === song.title
            );

            return (
              <div
                key={song._id || song.id || song.title || index}
                onClick={() => setCurrentIndex(index)}
                className={`group flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-orange-500/10 border border-orange-500/20"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Thumbnail */}
                  <div className="w-12 h-12 rounded-lg bg-gray-800 shrink-0 overflow-hidden relative">
                    {song.posterUrl ? (
                      <img
                        src={song.posterUrl}
                        className="w-full h-full object-cover"
                        alt="cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-500">
                        <span className="material-symbols-outlined text-gray-600 text-lg">music_note</span>
                      </div>
                    )}
                    {isActive && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-1 bg-orange-500 h-3 animate-pulse rounded-full mx-0.5"></div>
                        <div className="w-1 bg-orange-500 h-4 animate-pulse rounded-full mx-0.5" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1 bg-orange-500 h-2 animate-pulse rounded-full mx-0.5" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col min-w-0">
                    <h4 className={`font-bold text-sm truncate mb-0.5 ${isActive ? "text-orange-500" : "text-white group-hover:text-orange-400 transition-colors"}`}>
                      {song.title || "Untitled Track"}
                    </h4>
                    <p className="text-xs text-gray-400 truncate capitalize">
                      {song.mood || playlistType}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0 ml-4" onClick={(e) => e.stopPropagation()}>
                  {/* Play / Active indicator */}
                  <button
                    onClick={() => {
                      if (isActive) {
                        togglePlayPause();
                      } else {
                        setCurrentIndex(index);
                      }
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#f9570c] text-white opacity-100"
                        : "bg-white/10 text-white opacity-0 group-hover:opacity-100 hover:bg-[#f9570c]"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {isActive && isPlaying ? "pause" : "play_arrow"}
                    </span>
                  </button>

                  {/* Save / bookmark button */}
                  <button
                    onClick={() => saveSong(song)}
                    disabled={isSaved}
                    title={isSaved ? "Already saved" : "Save to library"}
                    className={`transition-colors ${
                      isSaved
                        ? "text-orange-500"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      style={isSaved ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                      bookmark
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 text-center text-sm text-gray-400">
          No songs found for your mood. Try scanning again.
        </div>
      )}
    </div>
  );
};

export default Playlist;