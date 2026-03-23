import SongsContext from "../SongContext";
import { useContext } from "react";
import { getSongs } from "../Services/Song.service";

export const useSongs = () => {
  const context = useContext(SongsContext);

  if (!context) {
    throw new Error("useSongs must be used within a SongsProvider");
  }

  const {
    songs,
    setSongs,
    loading,
    setLoading,
    playlistType,
    setPlaylistType,
    currentIndex,
    setCurrentIndex,
    currentSong,
    library,
    saveSong,
    removeSong,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    seek,
    goNext,
    goPrev,
  } = context;

  async function handleSongs({ mood }) {
    setLoading(true);
    setPlaylistType(mood);
    setCurrentIndex(0);

    try {
      const data = await getSongs({ mood });
      const nextSongs = Array.isArray(data?.songs) ? data.songs : [];
      setSongs(nextSongs);
      return data;
    } finally {
      setLoading(false);
    }
  }

  return {
    songs,
    loading,
    playlistType,
    handleSongs,
    currentIndex,
    setCurrentIndex,
    currentSong,
    library,
    saveSong,
    removeSong,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    seek,
    goNext,
    goPrev,
  };
};

export default useSongs;
