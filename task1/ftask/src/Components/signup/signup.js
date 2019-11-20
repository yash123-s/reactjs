import React, { Component } from 'react';
import '../signup/signup.css';

class signup extends Component {
    render() {
        return (
            <div className="bg1">
                <div>
                    <p className="sign">Signup Form</p>
                    <div>
                        <form>
                            <input className="input" type="text" placeholder="First name"></input><br></br>
                            <input className="input" type="text" placeholder="Last name"></input><br></br>
                            <input className="input" type="emial" placeholder="ysg@gmail.com"></input><br></br>
                            <input className="input" type="number" placeholder="Please enter a phone number"></input><br></br>
                            <input className="input" type="password" placeholder="Password"></input><br></br>
                            <input className="input" type="password" placeholder="Confirm Password"></input><br></br>
                            <input type="checkbox"></input>
                            <label className="remember">I agree <snap className="terms">terms</snap> and <snap className="terms">Private policy</snap></label>
                        </form>
                        <div><button className="btn">login-in</button></div>
                    </div>
                </div>
                <div><a className="last" href="/signin">signin</a></div>
            </div>
        );
    }
}

export default signup;