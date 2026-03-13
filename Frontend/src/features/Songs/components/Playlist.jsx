import React from "react";

const Playlist = ({ playlistType, songs = [], loading = false }) => {
  const hasPlaylist = Boolean(playlistType);
  const hasSongs = songs.length > 0;
  const title = hasPlaylist ? `${playlistType} Playlist` : "Playlist Preview";
  
  const helperText = !hasPlaylist
    ? "Detect an expression above to generate a playlist."
    : loading
    ? `Looking for songs that match "${playlistType}".`
    : hasSongs
    ? `${songs.length} song${songs.length === 1 ? "" : "s"} found for this mood.`
    : `No songs were returned for "${playlistType}" yet.`;

  return (
    <section className="w-full h-full flex flex-col text-gray-200">
      <div className="w-full">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between gap-4 items-start mb-6">
          
          {/* Title & Badge */}
          <div className="flex-1 min-w-[240px]">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-amber-400 text-[10px] font-bold tracking-widest uppercase">
              Mood Playlist
            </span>
            <h2 className="mt-3 mb-1 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              {title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
              {helperText}
            </p>
          </div>

          {/* Status Card */}
          <div className="min-w-[180px] rounded-xl p-4 bg-gray-800 border border-gray-700 shadow-sm">
            <div className="text-[10px] font-bold tracking-widest uppercase text-sky-400">
              Status
            </div>
            <div className={`mt-1 text-lg font-bold ${
                loading ? "text-amber-400" : hasSongs ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {loading
                ? "Fetching..."
                : hasSongs
                ? "Songs received"
                : hasPlaylist
                ? "No songs found"
                : "Waiting..."}
            </div>
            <div className="mt-1 text-xs text-gray-400">
              {hasPlaylist ? `Mood: ${playlistType}` : "No expression yet."}
            </div>
          </div>
        </div>

        {/* Content Section */}
        {!hasSongs ? (
          /* Empty / Loading State */
          <div className="mt-6 rounded-xl p-6 bg-gray-800 border border-gray-700 text-center shadow-sm">
            <div className="text-base font-bold text-gray-100">
              {loading ? "Checking your playlist..." : "No songs to show yet"}
            </div>
            <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto">
              {hasPlaylist
                ? "If the backend returns songs, they will appear here one by one."
                : "Use the camera detector to scan your mood, and your curated tracks will appear here."}
            </p>
          </div>
        ) : (
          /* Songs Grid - Reduced minmax size to 200px and gap to 4 */
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mt-6">
            {songs.map((song, index) => (
              <article
                key={song._id || song.id || song.name || song.title || index}
                className="group rounded-xl overflow-hidden bg-gray-800 border border-gray-700 shadow-sm hover:bg-gray-750 hover:-translate-y-1 hover:shadow-md hover:border-gray-500 transition-all duration-200 flex flex-col"
              >
                {/* Poster Image */}
                <div className="aspect-[16/10] bg-gray-900 relative overflow-hidden border-b border-gray-700">
                  {song.posterUrl ? (
                    <img
                      src={song.posterUrl}
                      alt={song.title || "Song poster"}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
                      No poster
                    </div>
                  )}
                </div>

                {/* Card Body - Tighter padding */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-sky-400">
                    Track {index + 1}
                  </div>
                  <h3 className="mt-1 mb-1 text-lg font-bold text-gray-100 leading-tight line-clamp-1">
                    {song.title || song.name || "Untitled"}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">
                    Mood: <span className="capitalize">{song.mood || playlistType}</span>
                  </p>

                  {/* Audio Player */}
                  <div className="mt-auto">
                    {song.url ? (
                      <audio
                        controls
                        preload="none"
                        src={song.url}
                        className="w-full rounded outline-none h-8 scale-95 origin-left"
                      >
                        Your browser does not support the audio player.
                      </audio>
                    ) : (
                      <div className="py-1.5 px-3 rounded-lg bg-gray-900 border border-gray-700 text-rose-400 text-xs text-center">
                        Audio missing
                      </div>
                    )}

                    {/* Footer Meta */}
                    <div className="mt-3 pt-3 border-t border-gray-700 flex justify-between items-center text-[10px] text-gray-500 font-medium">
                      <span className="capitalize">{playlistType}</span>
                      <span className={song.url ? "text-emerald-500" : "text-rose-500"}>
                        {song.url ? "Playable" : "No audio"}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Playlist;