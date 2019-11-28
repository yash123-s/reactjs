import React, { Component } from 'react';
import Navbar from '../../Navbar/Navbar';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('hey all');
  }
  componentWillMount() {
    console.log('hiiii');
  }
  render() {
    return (
      <div>
        <div><Navbar/></div>
        hello erveryone
      </div>
    );
  }
  componentDidMount() {
    console.log('bye');
  }
}


export default Lifecycle;