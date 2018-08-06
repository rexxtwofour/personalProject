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




registerAccount(){
    axios.post('/register', this.state)
        .then( registeredUser => {
            console.log(registeredUser)/* instead of a console.log() use this information to set the state to the user that is logged in */
        })
        .catch( err => {
            console.log(err)
        })
}

//make sure to add functionality to the register button 
    render() { 
        return (  
           <div> 

            <div className="createAccount">Create Account</div>   

            <div className="accountpage">
                <input onChange={this.handleChangeFullName} className="fullname"   placeholder="fullname"/>
                <input onChange={this.handleChangeEmail} className="email" placeholder="email"/>
                <input onChange={this.handleChangePassword}className="password"  placeholder="password"/>

                <button onClick={this.registerAccount} className="registerAccount">Register</button>
            
            
            </div>

        </div>


        )
    }
}
export default CreateAccount;
//export default connect( state => state, { login, register } )(CreateAccount);