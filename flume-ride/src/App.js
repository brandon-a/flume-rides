import React, {Component} from 'react';
import Navigationbar from './components/NavigationBar';
//import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
      <Navigationbar/>
      <p> meow</p>
      </div>
    )
  }
}

export default App;
