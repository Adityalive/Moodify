import React from "react";
import FaceExpression from "../../Expression/components/Expression";
import useSongs from "../hooks/Songhook";
import Playlist from "../components/Playlist";

export const Home = () => {
  const { songs, loading, playlistType, handleSongs } = useSongs();

  return (
    // Replaced the radial gradient with a solid, dark background (bg-gray-900)
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-gray-900 text-gray-200">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(320px,420px)_1fr] gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Face Expression */}
        {/* Removed all backdrop-blur and white/10 classes. Using solid bg-gray-800 */}
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-4 md:p-6 transition-colors hover:border-gray-600">
          <FaceExpression
            compact
            onClick={(expression) => {
              handleSongs({ mood: expression });
            }}
          />
        </div>

        {/* Right Column: Playlist */}
        {/* Same solid dark theme applied here to wrap the Playlist */}
        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-4 md:p-6 min-h-[500px]">
          <Playlist
            playlistType={playlistType}
            songs={songs}
            loading={loading}
          />
        </div>

      </div>
    </div>
  );
};

export default Home;