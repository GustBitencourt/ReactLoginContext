import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/auth";



const Home = () => {
  const { authenticated, user, logout } = useContext(AuthContext);  

  const handleLogout = () => {    
    logout();
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/compra">Compra</Link>
      {
        authenticated ? 
        (
          <div>
            <p>{`${user.name} ${user.lastname}`}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )
        
        : null
      }
      
    </div>
  )
}

export default Home;