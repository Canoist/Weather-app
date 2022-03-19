import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Main from "./layouts/main";

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
