import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <form
          className="add-tweed-form"
          onSubmit={this.props.handleSubmit}
        >
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.props.handleInput}
          placeholder="enter new tweed here"
        />
        <button>Add Tweed</button>
      </form>
      </div>
    );
  }
}

export default App;
