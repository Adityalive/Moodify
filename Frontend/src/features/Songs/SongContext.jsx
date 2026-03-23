import { createContext, useState, useRef, useEffect } from "react";

export const SongsContext = createContext(null);

export function SongsProvider({ children }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [playlistType, setPlaylistType] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [library, setLibrary] = useState([]);

  // Audio player state
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentSong = songs[currentIndex] ?? null;

  // --- Load & autoplay when currentSong changes ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!currentSong?.url) {
      audio.pause();
      audio.src = "";
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      return;
    }

    audio.src = currentSong.url;
    audio.load();
    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [currentSong?.url]);

  // --- Sync time/duration ---
  useEffect(() => {
    const audio = audioRef.current;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      // Auto-advance to next song
      setCurrentIndex((prev) => {
        if (songs.length === 0) return prev;
        return (prev + 1) % songs.length;
      });
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("loadedmetadata", onDurationChange);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("loadedmetadata", onDurationChange);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [songs.length]);

  // --- Player controls ---
  function togglePlayPause() {
    const audio = audioRef.current;
    if (!currentSong?.url) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
  }

  function seek(time) {
    const audio = audioRef.current;
    audio.currentTime = time;
    setCurrentTime(time);
  }

  function goNext() {
    if (songs.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  }

  function goPrev() {
    if (songs.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
  }

  // --- Library ---
  function saveSong(song) {
    if (!song) return;
    const alreadySaved = library.some(
      (s) => (s._id && s._id === song._id) || s.title === song.title
    );
    if (!alreadySaved) {
      setLibrary((prev) => [song, ...prev]);
    }
  }

  function removeSong(song) {
    setLibrary((prev) =>
      prev.filter(
        (s) => !((s._id && s._id === song._id) || s.title === song.title)
      )
    );
  }

  return (
    <SongsContext.Provider
      value={{
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
        // Audio player
        isPlaying,
        currentTime,
        duration,
        togglePlayPause,
        seek,
        goNext,
        goPrev,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}

export default SongsContext;
