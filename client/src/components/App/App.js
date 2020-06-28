import React, {useEffect, useState} from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Auth from '../Auth/Auth';
import {useSelector} from "react-redux";
import Main from "../Main/Main";

const RequireAuth = ({ isSignedIn, children }) => {
    if (!isSignedIn) {
        return <Redirect to='/login' />;
    }

    return children;
};

const App = () => {
    const isSignedIn = useSelector(state => state.user.isSignedIn);

    return (
        <div className="app">
            <Switch>
                <Route path='/login' component={Auth}/>

                <RequireAuth isSignedIn={isSignedIn}>
                    <Route path='/' component={Main} />
                </RequireAuth>
            </Switch>
        </div>
    );
}

export default App;
