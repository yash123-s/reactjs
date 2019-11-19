import React, { Component } from 'react'; 
// import image1 from '../images/image1.jpeg';
// import Img from 'react-image';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import '../signin/Signin.css';

class Signin extends Component {
    render() {
        return (
            <div className="bg">
                <p>Signin Form</p>
               
                <div>
                    <form>
                        <input className="input" type="text" placeholder="Mobile or email"></input><br></br>
                        <input className="input" type="Password" placeholder="Password"></input><br></br>
                        <input type="checkbox"></input>
                        <label className="remember">Remember me <snap className="forgot">Forgot password? </snap></label>
                    </form>
                    <div><button className="btn">Sign-in</button></div>
                    <div className="create">Create a new account.</div>
                    <div className="create">(or)</div>
                    <div  className="create">
                        <SocialIcon url="http://facebook.com/jaketrent" />
                        <SocialIcon url="http://twitter.com/jaketrent" />
                        <SocialIcon url="http://googleplus.com/jaketrent" />
                    </div>
                    <div><a href="/signup">signup</a></div>
                </div>
            </div>
        );
    }
}

export default Signin;