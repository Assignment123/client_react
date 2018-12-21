import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from './AdminRoute/Admin';
import User from './UserRoute/User';
import General from './GeneralRoute/General';
import SigninForm from '../LogIn/index';
import AuthenticationComponent from './Components/AuthenticationComponent';


class MainRoute extends Component {
    
    render(){
        return(
    <Router>
        <div>
        <Switch>
            <Route exact path="/login" component={SigninForm} />
        </Switch>
            <AuthenticationComponent>
                 <Route exact path="/admin" component={Admin} />
             </AuthenticationComponent>

             {/* <AuthenticationComponent> */}

            <Route exact path="/user" component={User} />
            {/* </AuthenticationComponent> */}

            {/* <AuthenticationComponent> */}

            <Route exact path="/general" component={General} />
            {/* </AuthenticationComponent> */}
            </div>
    </Router>
    )
    }
}

export default MainRoute;