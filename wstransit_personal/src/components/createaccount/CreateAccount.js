import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './createaccount.css';
import axios from 'axios';






class CreateAccount extends Component {
    constructor() {
        super();
        this.state = {  
            fullname: '',
            email: '',
            password: '',
        }
        this.registerAccount = this.registerAccount.bind(this)
        this.loginAccount = this.loginAccount.bind(this)
    }


    handleChangeFullName = (e) => {
        console.log(e.target.value)
        this.setState({ fullname: e.target.value})
    }

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value})
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value})
    }




registerAccount(){
    axios.post('/register', this.state)
        .then( registeredUser => {
            console.log(registeredUser)/* instead of a console.log() use this information to set the state to the user that is logged in */
        })
        .catch( err => {
            console.log(err)
        })
}

loginAccount(){
    axios.post('/login', this.state)
        .then( loginUser => {
            console.log(loginUser)
        })
        .catch( err => {
            console.log(err)
        })
}




//login method, add button, make sure to hit login in endpoint, send username and password to match bcrypt
//make sure to add functionality to the register button 
    render() { 
        console.log(this.state)
        return (  
           <div> 

            <div className="createAccount">Create Account</div>   

            <div className="accountpage">
                <input onChange={this.handleChangeFullName} className="fullname"   placeholder="fullname"/>
                <input onChange={this.handleChangeEmail} className="email" placeholder="email"/>
                <input onChange={this.handleChangePassword}className="password"  placeholder="password" type="password"/>
                <button onClick={this.registerAccount} className="registerAccount">Register</button>
            <div className="loginSection">
            
            
                <input onChange={this.handleChangeFullName} className="fullname"   placeholder="fullname"/>
                <input onChange={this.handleChangePassword}className="password"  placeholder="password" type="password"/>
                <button onClick={this.loginAccount} className="loginAccount">Login!</button>
            
            </div>
            </div>



        </div>


        )
    }
}
export default CreateAccount;
//export default connect( state => state, { login, register } )(CreateAccount);