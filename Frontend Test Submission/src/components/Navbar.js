import React from "react";
import {Link} from 'react-router-dom'
function Navbar(){
    return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">UrlShortener</Link>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/stats">Stats</Link>
      </li>
    </ul>
  </div>
</nav>

    );
}
export default Navbar;