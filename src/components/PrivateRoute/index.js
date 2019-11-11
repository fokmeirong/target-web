import React from 'react';
import { Route, Redirect, } from 'react-router-dom';

const needLogin = false;

//if need login, redirect to login page

const Privateroute = ({ component: Component, ...rest}) => (
    <Route
        {...rest} render={ (props) => (
            !needLogin ? <Component {...props}/> : <Redirect to={{ pathname: '/login' }}/>
        )}
    />
);

export default Privateroute;