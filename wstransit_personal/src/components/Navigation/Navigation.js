import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';


export default class Navigation extends Component {
    constructor(){
        super()
        this.state = {
            toggle: false
        }
    }


    toggleMenu = () => {
        this.setState((prevState)=> {
            return {
                toggle: !prevState.toggle
            }
        })
    }

    render(){
    return(
        <div className='nav-container'>


    <nav>
    <div>
    <div onClick={()=> this.toggleMenu()} className="show-menu">Navigation</div>

        <ul id="menu" className={this.state.toggle ? 'show' : 'hide'}>
          
        
        <li><Link to ="/">Home </Link></li>
        <li><Link to ="/CreateAccount">Create Account</Link></li>
        <li><Link to ="/Events">Events</Link></li>
        <li><Link to ="/CreateEvent">Create Event</Link></li>
        <li><Link to ="/EventReviews">Event Reviews</Link></li>
        <li> <Link to ="/PaymentSetup">Payment Setup</Link></li>
        <li><Link to ="/Contact"> Contact</Link> </li>
         
     
       
    </ul>
</div>
</nav>


            {/* <div className ="navbar">
                
                <Link to ="/">
                <button>Home</button>
                </Link>
                

                <Link to ="/CreateAccount">
                <button>Create Account</button>
                </Link>

                

                <Link to ="/Events">
                <button>Events</button>
                </Link>


                <Link to ="/CreateEvent">
                <button>Create Event</button>
                </Link>

                
                <Link to ="/EventReviews">
                <button>Event Reviews</button>
                </Link>



                <Link to ="/PaymentSetup">
                <button>Payment Setup</button>
                </Link>


                
                <Link to ="/Contact">
                <button>Contact</button>
                </Link>
               
            </div> */}
            </div>
        )
    }
}