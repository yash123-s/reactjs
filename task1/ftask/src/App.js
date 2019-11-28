import React , {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Signin from './Components/signin/Signin';
import Signup from './Components/signup/signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import UserInput from './Components/UserInput/UserInput';
import Lifecycle from './Components/Lifecycle/Lifecycle';
import Color from './task6/Color';
import Navbar from './Navbar/Navbar';
import Task5 from './Components/task/Task5';
// import UserOutput from './Components/UserOutput/UserOutput';
import UserInput from './Components/UserInput/UserInput';
import Contact from './Components/Restfull_web_services/Contact';
import User from './Components/Restfull_web_services/User';
// import Task from './task6/Task';

// class App extends Component {
//   state ={
//     person:[{
//       name:"tsg", 
//       age: '20'
//     }]
//   }
//   buttonClickHandler=()=>{
//     console.log('hi');
//     this.setState({
//       person:[{
//         name:"gala",
//         age:'21'
//       }]
//     })
// }
  // render() {
  //     return (
function App() {
  return (
    <div className="App">
      {/* <div>User Form Login Widget</div>  */} 
      {/* <Router>  */}
      {/* <switch>  */}
        {/* <Route exact path='/' component={Navbar}></Route>
         <Route exact path='/Signup' component={Signup}></Route> 
          <Route exact path='/Signin' component={Signin}></Route>
         <Route exact path='/Lifecycle' component={Lifecycle}></Route> 
         <Route exact path='/Task5' component={Task5}></Route>
         <Route exact path='/Color' component={Color}></Route>
         <Route exact path='/UserInput' component={UserInput}></Route> */}
         {/* <Route exact path='/Contact' component={Contact}></Route> */}
       {/* </switch>  */}
       {/* </Router>  */}
      {/* <button onClick={this.buttonClickHandler}>click me</button> */}
    
      {/* <UserOutput>I am {this.state.person[0].name}</UserOutput> */}
      {/* <UserOutput Username="YSG"></UserOutput> */}
           <div><User/></div>
          </div>
        );
      }
  // );
  //  }
//  }
export default App;