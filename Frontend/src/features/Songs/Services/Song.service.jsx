import axios from "axios";

const apiBaseUrl = `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api/songs`;

const api = axios.create({
  baseURL: apiBaseUrl,
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
