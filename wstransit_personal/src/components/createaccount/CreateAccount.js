import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';






class CreateAccount extends Component {
    constructor() {
        super();
        this.state = {  
            fullname: '',
            email: '',
            passworrd: '',
        }
    }


    handleChangeFullName = (e) => {
        this.setState({ name: e.target.value})
    }

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value})
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value})
    }







    render() { 
        return (  




        <div className="accountpage">
               <input onChange={this.handleChangeFullName}placeholder="fullname"/>
               <input onChange={this.handleChangeEmail}placeholder="email"/>
               <input onChange={this.handleChangePassword}placeholder="password"/>
               <button onClick={this.registerAccount} className="registerAccount">Register</button>
            
             <div>create account</div>
            
            
       </div>




        )
    }
}

export default CreateAccount;