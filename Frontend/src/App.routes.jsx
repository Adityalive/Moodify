import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./features/auth/Pages/Register";
import FaceExpression from "./features/Expression/components/Expression";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<FaceExpression />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
