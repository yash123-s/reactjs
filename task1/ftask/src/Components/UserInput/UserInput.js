import React, { Component } from 'react';
import Navbar from '../../Navbar/Navbar';
import UserOutput from '../UserOutput/UserOutput';



class UserInput extends Component {
    state ={
            person:[{
              name:"tsg", 
              age: '20'
            }]
          }
          buttonClickHandler=()=>{
            console.log('hi');
            this.setState({
              person:[{
                name:"gala",
                age:'21'
              }]
            })
        }
    render() {
        return (
            <div>
                {/* <input type="text" /> */}
                <button onClick={this.buttonClickHandler}>click me</button>
    
      <UserOutput>I am {this.state.person[0].name}, my age is {this.state.person[0].age}</UserOutput>
      <UserOutput Username="YSG"></UserOutput>
           
            </div>
        );
    }
}

export default UserInput;