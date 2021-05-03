import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../../pages/Home/index/Home";
import tasks from "../../pages/Profile/tasks";

function MainRoute({ component: Component,isAuthenticated: isAuthenticated, logout: logout, ...rest }) {
    return (

            <Route
                {...rest}
                render={(props) => {
                    if (isAuthenticated) {
                        return (
                            <Home>
                                <Component />
                            </Home>
                        );
                    } else {
                        return <Redirect to={{ pathname: "/404", state: { from: props.location } }} />;
                    }
                }}
            />
    );
}

export default MainRoute;
