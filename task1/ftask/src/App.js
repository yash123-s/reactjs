import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './Components/signin/Signin';
import Signup from './Components/signup/signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <div>User Form Login Widget</div>
     <Router>
      <switch>
        <Route exact path='/' component={Signin}></Route>

         <Route exact path='/Signup' component={Signup}></Route> 
        {/* <Route exact path='/Contact' component={Contact}></Route>  */}
        {/* <Route exact path='/Index' component={Index}></Route> */} */}
      </switch>
      </Router>
    </div>
  );
}

export default App;
