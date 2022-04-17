import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Favorites from "./layouts/favorites";
import Footer from "./components/footer";
import NavBar from "./components/navBar/navBar";
import AppLoader from "./components/ui/hoc/appLoader";
import UserEditPage from "./components/pages/userEditPage";
import LogOut from "./layouts/logOut";
import WeatherProvider from "./hooks/useWeather";
import ProtectedRoute from "./components/protectedRoute";

function App() {
    return (
        <>
            <AppLoader>
                <WeatherProvider>
                    <NavBar />
                    <Switch>
                        <Route path="/login/:type?" component={Login} />
                        <ProtectedRoute
                            path="/favorites"
                            component={Favorites}
                        />
                        <ProtectedRoute
                            path="/profile"
                            component={UserEditPage}
                        />
                        <Route path="/logout" component={LogOut} />
                        <Route path="/" exact component={Main} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer />
                </WeatherProvider>
            </AppLoader>
        </>
    );
}

export default App;
