import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log("LoginAuth", { email, password });

    if (email === "test@dh.com" && password === "dh123dh") {
      setUser({ id: "123", email });
      navigate("/");

    } else {
        console.log('Usuário ou senhas incorretos')
    }
  };

  const logout = () => {
    console.log("Logout");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
