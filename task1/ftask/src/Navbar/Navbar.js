import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                 <nav className="property">
                    <a href="/signup">SignUp </a>
                    <a href="/signin">SignIn </a>
                    <a href="/Lifecycle">LifeCycle </a>
                    <a href="/UserInput">UserInput </a>
                    {/* <a href="/UserOutput">UserOutput </a> */}
                    <a href="/Task5">task5 </a>
                    <a href="/Color">color </a>
                </nav>
            </div>
        );
    }
}

export default Navbar;