import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';


export default function Navigation() {
    return(
        <div>


    <nav>
    <div>
    <label for="show-menu" class="show-menu">Navigation</label>
    <input type="checkbox" id="show-menu" role="button"/>
        <ul id="menu">
          
        <Link to ="/">
        <li><a href="/">Home</a></li>
        </Link>

        <Link to ="/CreateAccount">
        <li><a href="/CreateAccount">Create Account</a></li>
        </Link>

         <Link to ="/Events">
        <li><a href="/Events">Events</a></li>
        </Link>


        <Link to ="/CreateEvent">
        <li><a href="/CreateEvent">Create Event</a></li>
        </Link>  
          
        
        <Link to ="/EventReviews">
        <li><a href="/EventReviews">Event Reviews</a></li>
        </Link>

        
        <Link to ="/PaymentSetup">
        <li><a href="/PaymentSetup">Payment Setup</a></li>
        </Link>
        
        
        <Link to ="/Contact"> 
        <li><a href="/Contact">Contact</a></li>
        </Link>  
     
       
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