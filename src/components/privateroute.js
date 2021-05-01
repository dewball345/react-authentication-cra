import React, { Component, useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {FBContext} from '../providers/firebaseauthprovider.js';

export function PrivateRoute({component: Component, ...rest}){
    let context = useContext(FBContext)

    // console.log("I EXIST")
    // console.log(context.auth);
    // console.log(Object.keys(context.auth));
    // console.log(context.auth['currentUser'])
    return(
        <Route {...rest}
            render={props => {
                console.log("CURRENT USER")
                console.log(context.currentUser)
                console.log(context.isloading)
                console.log("END")
                return context.currentUser !== undefined  ? <Component {...props} /> : context.isloading ? <div>Loading</div>: <Redirect to="/login" />
            }}>

        </Route>
    );

}