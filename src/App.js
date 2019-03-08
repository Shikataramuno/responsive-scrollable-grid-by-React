import React, { Component } from 'react';
import './App.css';
import { FormApp } from './FormApp';
import { MemberList } from './MemberList';

class App extends Component {
  render() {
    return (
      <div>
        <FormApp/>
        <MemberList/>
      </div>
    );
  }
}

export default App;
