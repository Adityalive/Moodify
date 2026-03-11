import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { registerUser, loginUser, getUser, logoutUser } from "../services/Authapi";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  const { user, setUser, loading, setLoading } = context;

  async function handleRegister({ username, email, password }) {
    setLoading(true);
    try {
      const data = await registerUser({ username, email, password });
      setUser(data.user);
      return data;
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin({ email, password }) {
    setLoading(true);
    try {
      const data = await loginUser({ email, password });
      setUser(data.user);
      return data;
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setLoading(true);
    try {
      const data = await logoutUser();
      setUser(null);
      return data;
    } finally {
      setLoading(false);
    }
  }

  async function handleGetUser() {
    setLoading(true);
    try {
      const data = await getUser();
      setUser(data.user);
      return data;
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGetUser,
  };
};
