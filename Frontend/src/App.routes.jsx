import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Register from "./features/auth/Pages/Register";
import Login from "./features/auth/Pages/Login";
import Protected from "./features/auth/components/Protected";
import Public from "./features/auth/components/Public";
import { Home } from "./features/Songs/Pages/Home";
import Landingpage from "./features/shared/Landingpage";

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Public><Landingpage /></Public>} />
        <Route path="/login" element={<Public><Login /></Public>} />
        <Route path="/register" element={<Public><Register /></Public>} />
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
