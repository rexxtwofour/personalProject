import React from 'react';
import { Link } from 'react-router-dom'
// import './Navigation.css';


export default function Navigation() {
    return(
        <div>
            <div className ="navbar">
            <div>
                

                
                <Link to ="/Home">
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










            </div>
                
            </div>
        </div>
    )
}