import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Protected = ({ children }) => {
  const { user, loading, handleGetUser } = useAuth();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let active = true;

    const checkAuth = async () => {
      try {
        await handleGetUser();
      } catch {
        // ignore: redirect logic below handles unauthenticated state
      } finally {
        if (active) setChecked(true);
      }
    };

    checkAuth();

    return () => {
      active = false;
    };
  }, []);

  if (loading || !checked) {
    return (
      <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <h1>Checking session...</h1>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;
