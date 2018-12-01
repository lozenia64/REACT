//var React = require('react');
//var Component = React.Component;
//모듈의 아래와 같이 import를 사용하여 불러올 수 있다.
import React, { Component } from 'react';
//svg,css 파일도 import를 사용하여 불러올 수 있다.
import logo from './logo.svg';
import './App.css';

//App 클래스 선언. Component 클래스 상속.
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
