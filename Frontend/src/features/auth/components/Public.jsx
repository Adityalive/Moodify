import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Public = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
        {/* Minimal loading state entirely blending with dark mode */}
      </div>
    );
  }

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default Public;
