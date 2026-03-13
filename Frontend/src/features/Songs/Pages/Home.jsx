import React from "react";
import FaceExpression from "../../Expression/components/Expression";
import useSongs from "../hooks/Songhook";
import Playlist from "../components/Playlist";

export const Home = () => {
  const { songs, loading, playlistType, handleSongs } = useSongs();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px",
        background:
          "radial-gradient(circle at top, #fde68a 0%, #fb7185 26%, #0f172a 100%)",
      }}
    >
      <div
        style={{
          width: "min(100%, 1320px)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(320px, 420px) minmax(0, 1fr)",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <FaceExpression
          compact
          onClick={(expression) => {
            handleSongs({ mood: expression });
          }}
        />
        <Playlist
          playlistType={playlistType}
          songs={songs}
          loading={loading}
        />
      </div>
    </div>
  );
};
