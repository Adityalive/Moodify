import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/songs",
  withCredentials: true,
});

export async function getSongs({ mood }) {
  const response = await api.get(`/getsong?mood=${encodeURIComponent(mood)}`);
  const payload = response.data;

  return {
    ...payload,
    songs: Array.isArray(payload?.songs)
      ? payload.songs
      : Array.isArray(payload?.song)
        ? payload.song
        : [],
  };
}
