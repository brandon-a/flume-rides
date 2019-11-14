import React from 'react';
import './NavigationBar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import landingpage from './landingpage';
import about from './about';
import drive from './drive';
import ride from './ride';
import profile from './profile';
import createaccount from './createaccount';
import logout from './logout';
import login from './login';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar_tool">
            <div className="navbar_logo"><Link to="/">Home</Link></div>
            <div className="navbar_items">
                <ul>
                    <li><Link to={'/about'} className="nav-link">About</Link></li>
                    <li><Link to={'/drive'} className="nav-link">Drive</Link></li>
                    <li><Link to={'/ride'} className="nav-link">Ride</Link></li>
                    <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
                    <li><Link to={'/createaccount'} className="nav-link">Create Account</Link></li>
                    <li><Link to={'/login'} className="nav-link">Login</Link></li>
                    <li><Link to={'/logout'} className="nav-link">Logout</Link></li>
                </ul>
            </div>
        </nav>
        <Switch>
            <Route exact path='/' component={landingpage} />
            <Route path='/login' component={login} />
            <Route path='/about' component={about} />
            <Route path='/drive' component={drive} />
            <Route path='/ride' component={ride} />
            <Route path='/profile' component={profile} />
            <Route path='/createaccount' component={createaccount} />
            <Route path='/login' component={login} />
            <Route path='/logout' component={logout} />
        </Switch>
    </header>
)

export default navbar;