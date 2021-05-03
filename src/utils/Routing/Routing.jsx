import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Profile from "../../pages/Profile/index/Profile";
import Home from "../../pages/Home/index/Home";
import {NavbarMenuItems, SiderMenuItems} from "../constants";
import ProfileRoute from "./ProfileRoute";
import MainRoute from "./MainRoute";

function Routing() {

    return (
        <main>
            <Router>
                <React.Suspense fallback={<div>&nbsp;</div>}>
                <Switch>
                    {SiderMenuItems.map(
                        (page) =>
                            <ProfileRoute
                                exact
                                isAuthenticated={localStorage.getItem("user") != null ? true : false}
                                path={page.url}
                                component={React.lazy(() => import(`../../pages/Profile/${page.component}`))}
                                title={page.title}
                                key={page.title}
                            />
                    )}
                    {NavbarMenuItems.map(
                        (page) =>
                            <MainRoute
                                exact
                                isAuthenticated={true}
                                path={page.url}
                                component={React.lazy(() => import(`../../pages/Home/${page.component}`))}
                                title={page.title}
                                key={page.title}
                            />
                    )}
                </Switch>
                </React.Suspense>
            </Router>
        </main>
    );
}

export default Routing;