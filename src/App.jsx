import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "./pages/Home.jsx";
import NavBar from "./cockponents/Navbar.jsx";
export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
      </div>
    </Router>
  );
}
