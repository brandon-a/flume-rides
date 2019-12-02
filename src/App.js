import React, {Component} from 'react';
import Navigationbar from './components/NavigationBar';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import landingpage from './components/landingpage';
import about from './components/about';
import login from './components/login';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Navigationbar />
      </div>
      // <div className="layout">
      //   <Layout>
      //     <Header className="navbar-color" title="FLUME RIDES" navbar>
      //       <Navigation>
      //         <Link to="/landingpage">Home</Link>
      //         <Link to="/about">About</Link>
      //         <Link to="/drive">Drive</Link>
      //         <Link to="/ride">Ride</Link>
      //         <Link to="/profile">Profile</Link>
      //         <Link to="/createaccount">Create</Link>
      //         <Link to="/login">Login</Link>
      //         <Link to="/logout">Logout</Link>
      //       </Navigation>
      //     </Header>
      //     <Drawer title="Contents">
      //       <Navigation>
      //         <Link to="/home">Home</Link>
      //         <Link to="/about">About</Link>
      //         <Link to="/drive">Drive</Link>
      //         <Link to="/ride">Ride</Link>
      //         <Link to="/profile">Profile</Link>
      //         <Link to="/login">Login</Link>
      //         <Link to="/logout">Logout</Link>
      //         <Link to="/GooglePlacesSearch">Google</Link>
      //       </Navigation>
      //     </Drawer>
      //     <Content>
      //       <div className="page-contents"/>
      //       <Main/>
      //     </Content>
      //   </Layout>
      // </div>
    );
  }
}

export default App;
