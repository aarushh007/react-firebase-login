import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { app } from "./firebase.js";
import firebase from "firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.code));
  };
  return (
    <div className="login">
      <h1>Login </h1>
      <p>Email</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={Login}>Login</button>

      <br />
      <br />
      <Link to="/signup">Dont have an account? Sign Up</Link>
    </div>
  );
}

export default Login;
