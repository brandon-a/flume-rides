import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Drive from './drive';
import Ride from './ride';
import Profile from './profile';
import Logout from './logout';
import CreateAccount from './createaccount';
import Login from './login';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/landingpage" component={LandingPage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/drive" component={Drive}/>
        <Route exact path="/ride" component={Ride}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/createaccount" component={CreateAccount}/>
        <Route exact path="/login" component={Login}/>
    </Switch>
)

export default Main;