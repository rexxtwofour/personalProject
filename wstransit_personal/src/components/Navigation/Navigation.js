import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';


export default function Navigation() {
    return(
        <div>



    <div>
    <label for="show-menu" class="show-menu">Navigation</label>
    <input type="checkbox" id="show-menu" role="button"/>
        <ul id="menu">
          
          
        <li><a href="#">Home</a></li>
          
          
        <li><a href="#">Create Account</a></li>
          
          
        <li><a href="#">Events</a></li>
          
          
        <li><a href="#">Create Event</a></li>
          
          
        <li><a href="#">Event Reviews</a></li>
          
          
        <li><a href="#">Payment Setup</a></li>
          
          
        <li><a href="#">Contact</a></li>
          
     
       
    </ul>
</div>



            <div className ="navbar">
                
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
               
            </div>







        </div>
    )
}