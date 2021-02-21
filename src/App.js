import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import { app } from "./firebase.js";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Signup } from "./Signup.js";

function App() {
  const [user, setUser] = useState(false);
  const authChanged = () => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  };
  useEffect(() => {
    authChanged();
  }, []);
  return (
    <Router>
      <Header user={user} />
      <Route exact path="/">
        <h1>Home Page</h1>
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Router>
  );
}

export default App;
