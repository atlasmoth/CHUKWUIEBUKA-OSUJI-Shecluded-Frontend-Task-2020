import React from "react";
import "./App.css";
import Cats from "./components/Cats";
import { NavLink, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Cats />
    </div>
  );
}

export default App;
