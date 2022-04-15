import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {api, createSession} from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    //verificando se existe uma sessão no local storage
    if(recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }

    setLoading(false);
  }, [])

  const login = async (email, password) => {
    //vem do post da api
    const response = await createSession(email, password);

    console.log("LoginAuth", response.data);


    //criando sessão com local storage - informações Vindas da Api
    const loggedUser = response.data.user;
    const token = response.data.token;

    //guardando no local storage
    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    //informação passada pelo header
    api.defaults.headers.Authorization = `Bearer ${token}`;
    
    setUser(loggedUser);
    navigate("/");
    
  };

  const logout = () => {
    console.log("Logout");
    //limpando localStorage
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    
    //retirando autorização do header
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
