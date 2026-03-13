import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./features/auth/Pages/Register";
import Login from "./features/auth/Pages/Login";
import Protected from "./features/auth/components/Protected";
import { Home } from "./features/Songs/Pages/Home";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
