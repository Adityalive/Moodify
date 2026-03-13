import { createContext, useState } from "react";

export const SongsContext = createContext(null);

export function SongsProvider({ children }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [playlistType, setPlaylistType] = useState("");

  return (
    <SongsContext.Provider
      value={{
        songs,
        setSongs,
        loading,
        setLoading,
        playlistType,
        setPlaylistType,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}

export default SongsContext;
