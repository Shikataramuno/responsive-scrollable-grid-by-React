import React, { Component } from 'react';

export class FormApp extends Component {
  numbers = [1,2,3,4,5];
  doubled = null;
  listItems = [];

  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
      message: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.send = this.send.bind(this);
    this.doubled = this.numbers.map((number) => number * 2);
    this.listItems = this.numbers.map((number) =>
      <li>{number}</li>
    );
  }
    
  handleInput({ target: { value } }) {
    this.setState({
      value
    });
  }
    
  send() {
    const { value } = this.state;
    this.setState({
      value: '',
      message: value
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleInput} />
        <button onClick={this.send}>SEND</button>
        <div>{this.state.message}</div>
        <ul>
          {this.numbers.map((number) => <li key={number.toString()}>{number}</li>)}
        </ul>
      </div>
    );
  }
}