import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "./firebase.js";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = () => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };
  return (
    <div className="signup">
      <h1>Sign Up </h1>
      <p>Email</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={signup}>Sign Up</button>
      <br />
      <br />
      <Link to="/login">Have an account? Login</Link>
    </div>
  );
}
