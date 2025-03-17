import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Profil">Mon Profil</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;