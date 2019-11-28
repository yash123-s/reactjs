import React, { Component } from 'react';
import Contact from './Contact';

class User extends Component {
    render() {
        return (
          <Contact list={this.state.list } list1={this.state.list1}/>
      )
      }
      state = {
        list: ' ',
        list1:[]
      }
    
        componentDidMount() {
          fetch('https://api.github.com/users/KrunalLathiya')
          .then(res => res.json())
          .then((data) => {
            this.setState({ list: data })
          })
          .catch(console.log)
    
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data2) => {
        this.setState({ list1: data2 })
      })
      .catch(console.log)
    }
  }
    

export default User;