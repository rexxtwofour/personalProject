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



                // <form action="/action_page.php">
                // Full Name:<br>
                // <input type="text" name="firstname" value=""/>
                // <br>
                // Email:<br>
                // <input type="text" name="email" value=""/>
                // Password:<br>
                // <input type="text" name="firstname" value=""/>
                // <br><br>
                // <input type="submit" value="Register!"/>
                // </form> 



        <div className="accountpage">
               <input type="text" className="fullname"/>
               <input type="text" className="email"/>
               <input type="text" className="password"/>
               <button className="register"></button>
            
             <div>create account</div>
            
            
       </div>




        )
    }
}

export default CreateAccount;