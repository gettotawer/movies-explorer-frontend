import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({components: [Header, Component], ...props}) {
    
    return(
        <Route>
            {
                () => props.isLoggedIn === true ? (<><Header {...props}/><Component {...props}/></>): <Redirect to={props.RedirectPath}/>
            }
        </Route>
    )
}

export default ProtectedRoute