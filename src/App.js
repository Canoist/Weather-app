import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/responsiveAppBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Favorites from "./layouts/favorites";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Switch>
        <Route path="/login/:type?" component={Login} />
        <Route path="/other" component={Favorites} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
