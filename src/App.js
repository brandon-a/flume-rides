import React, {Component} from 'react';
import Navigationbar from './components/NavigationBar';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <div className="layout">
        <Layout>
          <Header className="navbar-color" title="FLUME RIDES" navbar>
            <Navigation>
              <Link to="/landingpage">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/drive">Drive</Link>
              <Link to="/ride">Ride</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/logout">Logout</Link>
            </Navigation>
          </Header>
          <Drawer title="Contents">
            <Navigation>
              <Link to="/landingpage">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/drive">Drive</Link>
              <Link to="/ride">Ride</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/logout">Logout</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-contents"/>
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;