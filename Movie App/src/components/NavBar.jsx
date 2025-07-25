import { Link } from "react-router-dom";
import '../css/Navbar.css'; 

function NavBar(){

  return(
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/MovieApp" className="navbar-title">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/MovieApp" className="nav-link">Home</Link>
        <Link to="/Favourite" className="nav-link">Favorites</Link>
      </div>

    </nav>
  )
}

export default NavBar;