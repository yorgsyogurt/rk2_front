import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Profile from "../../pages/Profile/index/Profile";

function ProtectedRoute({ component: Component,isAuthenticated: isAuthenticated, logout: logout, ...rest }) {
    return (
        <Profile>
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated) {
                    return (

                            <Component />

                    );
                } else {
                    return <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />;
                }
            }}
        />
        </Profile>
    );
}

export default ProtectedRoute;
