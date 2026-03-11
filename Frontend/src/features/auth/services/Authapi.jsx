import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/users",
  withCredentials: true
});

export async function registerUser({
  username,
  email,
  password
}) {
  const response = await api.post("/register", {
    username,
    email,
    password
  });
  return response.data;
}

export async function loginUser({
  email,
  password
}) {
  const response = await api.post("/login", {
    email,
    password
  });
  return response.data;
}

export async function logoutUser() {
  const response = await api.post("/logout");
  return response.data;
}

export async function getUser() {
  const response = await api.get("/me");
  return response.data;
}
