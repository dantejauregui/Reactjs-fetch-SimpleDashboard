import React, { Component } from 'react';
import './App.css';
import TableGeneral from './components/TableGeneral';
import HeaderBar from './components/HeaderBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <TableGeneral />
      </div>
    );
  }
}

export default App;
