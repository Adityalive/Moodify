
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
      await registerUser({ username, email, password });
      const data = await getUser();
      setUser(data);
      return data;
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin({ email, password }) {
    setLoading(true);
    try {
      await loginUser({ email, password });
      const data = await getUser();
      setUser(data);
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
      setUser(data);
      return data;
    } catch (error) {
      setUser(null);
      throw error;
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
