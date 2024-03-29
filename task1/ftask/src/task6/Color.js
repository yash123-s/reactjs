import React from 'react';
import Task from './Task.js';
import Navbar from '../Navbar/Navbar.js';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: 'green'
    };
  }
  changeColor() {
    this.setState((prevState, props) => ({
      color: prevState.color === 'green' ? 'blue' : 'red'
    }));
  }
  render() {
    return (
      <div>
      <div style={{height: '500px', width: '500px',padding: '50px', backgroundColor: this.state.color}}>
        <Task clickHandler={this.changeColor} currentColor={this.state.color}></Task>
      </div>
      </div>
    )
    }
}

export default Color;