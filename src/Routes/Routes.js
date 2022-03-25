import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { AuthContext } from "../Context/auth";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";



export const AppRoutes = () => {
  const [user, setUser] = useState(null);

  const login = ( email, password ) => {    
    console.log('LoginAuthInRoutes', {email, password});
    setUser({ id: '123', email })

  }

  const logout = () => {

  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};
