import React from "react";
import "./Header.css";
import { Link, Redirect } from "react-router-dom";
import { app } from "./firebase";

function Header({ user }) {
  const logout = () => {
    app.auth().signOut();
  };
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        {user ? (
          <div>
            <li className="yo">
              <Link onClick={logout} to="/">
                Logout
              </Link>
            </li>
            <li className="hello">
              <a>You are signed in</a>
            </li>
          </div>
        ) : (
          <div>
            <li className="hello">
              <a>You are not signed in</a>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Header;
