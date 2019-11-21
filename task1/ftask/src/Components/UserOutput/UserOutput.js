import React, { Component } from 'react';

const UserOutput =(props) => {
        return (
            <div>
                <p>I'm Yashaswini, in office they call they call me {props.Username}. im a trainee in qwinix technology,Mysore. </p>
                <p>Qwinix is a global next-gen software development and cloud managed services provider.ugh collaborative relationships with its partners and clients, Qwinix innovators build and run leading-edge technology solutions by leveraging cloud, design thinking, data, and analytics.</p>
                <div>{props.children}</div>
       </div>
        );
    }


export default UserOutput;