import React, { Component } from 'react';
import './App.css';
import { FormApp } from './FormApp';
import { BlogApp } from './BlogApp';

class App extends Component {
  render() {
    return (
      <div>
        <FormApp/>
        <BlogApp/>
      </div>
    );
  }
}

export default App;
