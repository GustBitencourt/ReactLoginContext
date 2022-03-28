import { useState, useContext } from "react";
import { AuthContext } from "../../Context/auth";


import "./style.css"

const LoginPage = () => {
  //informações vinda do context
  const { authenticated, login } = useContext(AuthContext);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('LoginPage', {email, password} );

    //integrando com o contexto e API
    login(email, password);
  }

  return (
    <div id="login">
      <h1 className="title">Login</h1>
      <p>{String(authenticated)}</p>

      <form className="form" onSubmit={handleSubmit} >
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
