import React from "react";
import "./App.css";
import Cats from "./components/Cats";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Catslist from "./components/Catslist";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/cats/:breed"
          render={props => <Catslist {...props} />}
        />
        <Route exact path="/cats" render={props => <Cats {...props} />} />
        <Route exact render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
