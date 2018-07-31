import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './createaccount.css';







class CreateAccount extends Component {
    constructor() {
        super();
        this.state = {  
            fullname: '',
            email: '',
            password: '',
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