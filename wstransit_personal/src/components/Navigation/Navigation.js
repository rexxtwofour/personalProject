import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';


export default function Navigation() {
    return(
        <div>


    <nav>
    <div>
    <label className="show-menu">Navigation</label>
    <input type="checkbox" className="navbutton" id="show-menu" role="button"/>
        <ul id="menu">
          
        
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