import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from '../auth/UserContext';
// import "../App.css";
import "./navigation.css";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  // This function isn't changed, it's here for completeness
  function loggedInNav() {
    return (
      <div className="main-navigation">
        <NavLink className="nav-link" to="/home?country=us&cat=general">Top News</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=business">Business</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=entertainment">Entertainment</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=health">Health</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=science">Science</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=sports">Sports</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=technology">Technology</NavLink>
        <NavLink className="nav-link" to="/articles/saved">Saved Articles</NavLink>
        <Link to="/" onClick={logout}>
          Log out 
        </Link>
      </div>
    );
  }

  function loggedOutNav() {
    return (
      <div className="main-navigation">
        <NavLink className="nav-link" to="/home?country=us&cat=general">Top News</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=business">Business</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=entertainment">Entertainment</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=health">Health</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=science">Science</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=sports">Sports</NavLink>
        <NavLink className="nav-link" to="/home?country=us&cat=technology">Technology</NavLink>
        <NavLink to="/auth/login">Login</NavLink>
        <NavLink to="/auth/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <nav>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;

