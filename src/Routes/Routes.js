import { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "../Context/auth";
import Bought from "../Pages/Bought";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";

export const AppRoutes = () => {

  //responsável pela rota privada
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    if(!authenticated) {
      return <Navigate to="/login" />;
    }
    
    return children;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/compra"
            element={
              <Private>
                <Bought />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
