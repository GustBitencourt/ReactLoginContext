import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

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

  const login = (email, password) => {
    console.log("LoginAuth", { email, password });

    //criando sessão com local storage
    const loggedUser = {
      id: '123',
      email,
      name: 'DigitalHouse',
      lastname: 'Brasil'
    }
    //guardando no local storage
    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (email === "test@dh.com" && password === "dh123dh") {
      setUser({ id: "123", email, name: 'DigitalHouse', lastname: 'Brasil' });
      navigate("/");

    } else {
        console.log('Usuário ou senhas incorretos')
    }
  };

  const logout = () => {
    console.log("Logout");
    //limpando localStorage
    localStorage.removeItem("user")
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
