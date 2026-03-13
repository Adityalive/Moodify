const sectionStyle = {
  width: "100%",
};

const panelStyle = {
  borderRadius: "28px",
  padding: "24px",
  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.94))",
  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.3)",
  border: "1px solid rgba(148, 163, 184, 0.16)",
  color: "#f8fafc",
};

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 14px",
  borderRadius: "999px",
  background: "rgba(251, 191, 36, 0.12)",
  border: "1px solid rgba(251, 191, 36, 0.24)",
  color: "#fde68a",
  fontSize: "0.85rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const statusCardStyle = {
  borderRadius: "22px",
  padding: "24px",
  background: "rgba(15, 23, 42, 0.54)",
  border: "1px solid rgba(148, 163, 184, 0.14)",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "18px",
  marginTop: "24px",
};

const cardStyle = {
  borderRadius: "22px",
  padding: "20px",
  background: "linear-gradient(180deg, rgba(30, 41, 59, 0.94), rgba(15, 23, 42, 0.96))",
  border: "1px solid rgba(125, 211, 252, 0.14)",
  boxShadow: "0 18px 40px rgba(2, 6, 23, 0.28)",
};

const metaLabelStyle = {
  fontSize: "0.76rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#93c5fd",
};

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
    <section style={sectionStyle}>
      <div style={panelStyle}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <div>
            <span style={badgeStyle}>Mood Playlist</span>
            <h2
              style={{
                margin: "16px 0 10px",
                fontSize: "clamp(1.8rem, 3vw, 2.7rem)",
                lineHeight: 1.05,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: "640px",
                color: "rgba(226, 232, 240, 0.82)",
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              {helperText}
            </p>
          </div>

          <div
            style={{
              minWidth: "220px",
              ...statusCardStyle,
            }}
          >
            <div style={metaLabelStyle}>Status</div>
            <div
              style={{
                marginTop: "10px",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: loading ? "#fde68a" : hasSongs ? "#86efac" : "#fca5a5",
              }}
            >
              {loading
                ? "Fetching songs..."
                : hasSongs
                  ? "Songs received"
                  : hasPlaylist
                    ? "No songs found"
                    : "Waiting for mood"}
            </div>
            <div
              style={{
                marginTop: "12px",
                color: "rgba(226, 232, 240, 0.72)",
                fontSize: "0.95rem",
                lineHeight: 1.5,
              }}
            >
              {hasPlaylist ? `Current mood: ${playlistType}` : "No expression selected yet."}
            </div>
          </div>
        </div>

        {!hasSongs ? (
          <div
            style={{
              marginTop: "24px",
              ...statusCardStyle,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
              {loading ? "Checking your playlist..." : "No songs to show yet"}
            </div>
            <p
              style={{
                margin: "10px 0 0",
                color: "rgba(226, 232, 240, 0.75)",
                lineHeight: 1.6,
              }}
            >
              {hasPlaylist
                ? "If the backend returns songs, they will appear here one by one."
                : "Use the camera detector above, then this section will show the songs that came back from getSongs."}
            </p>
          </div>
        ) : (
          <div style={gridStyle}>
            {songs.map((song, index) => (
              <article
                key={song._id || song.id || song.name || song.title || index}
                style={cardStyle}
              >
                <div style={metaLabelStyle}>Song {index + 1}</div>
                <h3
                  style={{
                    margin: "14px 0 10px",
                    fontSize: "1.3rem",
                    lineHeight: 1.3,
                  }}
                >
                  {song.name || song.title || "Untitled song"}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#cbd5e1",
                    fontSize: "0.98rem",
                  }}
                >
                  {song.artist || song.singer || "Unknown artist"}
                </p>
                <div
                  style={{
                    marginTop: "18px",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(148, 163, 184, 0.14)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    color: "rgba(226, 232, 240, 0.72)",
                    fontSize: "0.9rem",
                  }}
                >
                  <span>{playlistType}</span>
                  <span>{song.album || song.movie || "Single"}</span>
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
