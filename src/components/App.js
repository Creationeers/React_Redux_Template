import "./App.css";

import { Redirect, Route, Switch } from "react-router-dom";

import { HomePage } from "./pages";
import { NavBar } from "./common";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
