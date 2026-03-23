import React, { useState, useMemo } from "react";
import FaceExpression from "../../Expression/components/Expression";
import useSongs from "../hooks/Songhook";
import Playlist from "../components/Playlist";
import TopNav from "../components/TopNav";
import BottomPlayer from "../components/BottomPlayer";
import UserSidebar from "../components/UserSidebar";
import NowPlayingCard from "../components/NowPlayingCard";

export const Home = () => {
  const { songs, loading, playlistType, handleSongs } = useSongs();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter songs by search query (title or mood)
  const filteredSongs = useMemo(() => {
    if (!searchQuery.trim()) return songs;
    const q = searchQuery.toLowerCase();
    return songs.filter(
      (s) =>
        s.title?.toLowerCase().includes(q) ||
        s.mood?.toLowerCase().includes(q)
    );
  }, [songs, searchQuery]);

  return (
    <div className="h-screen w-full bg-[#101010] flex flex-col overflow-hidden font-sans text-white">
      <TopNav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Main Content Dashboard */}
      <div className="flex-1 flex overflow-hidden px-6 md:px-8 pb-[100px] gap-6 max-w-[1600px] mx-auto w-full">

        {/* Left Column (Now Playing & Detector) */}
        <div className="w-full lg:w-[340px] flex flex-col gap-6 shrink-0 h-full overflow-y-auto no-scrollbar pt-6 pb-6">
          <NowPlayingCard />
          <FaceExpression
            onClick={(expression) => {
              setSearchQuery(""); // reset filter on new mood
              handleSongs({ mood: expression });
            }}
          />
        </div>

        {/* Center Column (Playlist / Suggested) */}
        <div className="flex-1 bg-[#151515] border border-white/5 rounded-2xl flex flex-col overflow-hidden min-w-[300px]">
          <div className="p-6 flex flex-col h-full overflow-y-auto no-scrollbar">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-white font-bold text-xl">Suggested for You</h2>
                {playlistType && (
                  <p className="text-gray-500 text-xs mt-0.5 capitalize">
                    Mood: <span className="text-orange-400">{playlistType}</span>
                    {searchQuery && (
                      <> · <span className="text-gray-400">{filteredSongs.length} result{filteredSongs.length !== 1 ? 's' : ''}</span></>
                    )}
                  </p>
                )}
              </div>
            </div>

            {/* Playlist */}
            <div className="flex-1">
              <Playlist
                playlistType={playlistType}
                songs={filteredSongs}
                loading={loading}
              />
            </div>
          </div>
        </div>

        {/* Right Column (User Sidebar) */}
        <div className="hidden xl:block">
          <UserSidebar />
        </div>

      </div>

      <BottomPlayer />
    </div>
  );
};

export default Home;