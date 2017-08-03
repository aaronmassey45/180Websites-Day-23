import React, {Component} from 'react';
import Navbar from './navbar';
import Button from './components/button';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container text-center">
          <div className="text text-lg">This Button Has Been Clicked</div>
          <Button/>
        </div>
      </div>
    );
  }
}
