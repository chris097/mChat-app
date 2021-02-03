/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from "./Pages/Home";
import { LoginUser } from "./Pages/Login";
import { UserSignUp } from "./Pages/Signup";



export const App = () => {
    return(
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/src/Components/Pages/Login" exact component={LoginUser} />
                    <Route path="/src/Components/Pages/Signup" exact component={UserSignUp} />
                </Switch>
            </Router>
        </>
    )
}