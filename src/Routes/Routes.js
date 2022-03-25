import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
