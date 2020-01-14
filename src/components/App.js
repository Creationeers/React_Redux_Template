import { Redirect, Route, Switch } from "react-router-dom";

import React from "react";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </>
  );
}

export default App;
