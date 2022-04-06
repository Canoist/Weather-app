import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/responsiveAppBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Favorites from "./layouts/favorites";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <ResponsiveAppBar />
            <Switch>
                <Route path="/login/:type?" component={Login} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
