import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./features/auth/Pages/Register";
import FaceExpression from "./features/Expression/components/Expression";
import Login from "./features/auth/Pages/Login";
import Protected from "./features/auth/components/Protected";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Protected><FaceExpression /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
