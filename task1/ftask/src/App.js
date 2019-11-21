import React , {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Signin from './Components/signin/Signin';
// import Signup from './Components/signup/signup';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
// import Lifecycle from './Components/Lifecycle/Lifecycle';



class App extends Component {
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
// function App() {
//   return (
    <div className="App">
     {/* {/ <div>User Form Login Widget</div> /}
     {/ <Router> /}
      {/ <switch> /}
        {/ <Route exact path='/' component={Signup}></Route>  /}
        {/ <Route exact path='/Signin' component={Signin}></Route> /}
        {/ <Route exact path='/' component={Lifecycle}></Route> /}
      {/ </switch> /}
      {/ </Router> /} */}
      <button onClick={this.buttonClickHandler}>click me</button>
     
      <UserOutput>I am {this.state.person[0].name}</UserOutput>
      <UserOutput Username="YSG"></UserOutput>
     
    </div>
  );
}
}
export default App;