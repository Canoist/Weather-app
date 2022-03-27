import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavTabs from "./components/ui/navItems/navTabs";
import Login from "./layouts/login";
import Main from "./layouts/main";

function App() {
  return (
    <>
      <NavTabs />
      <Switch>
        <Route path="/login/:type?" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
