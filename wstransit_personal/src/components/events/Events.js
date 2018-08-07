import React, { Component } from 'react';
// import selectedEventRoutes from './selectedEventRoutes';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './Events.css';
import bellatormma from '../../images/bellatormma.jpg';
import edclv2018 from '../../images/edclv2018.jpg';
import lakings from '../../images/lakings.png';
import lakerslogo from '../../images/lakers.png';
import ramslogo from '../../images/rams.png';
import dodgerslogo from '../../images/ladodgers.gif';
import ninerslogo from '../../images/niners.png';
import raiderslogo from '../../images/raiderslogo.png';



//collect photos and information to be displayed on those pages

class Events extends Component {
    state = { 


     }
    render() { 
        return (  

            <div>

                  <div className="eventsTitle">Events</div>

                <div className="events">
            
              
                 <a href="./EventOne">
                 <img src={bellatormma} className="bellatormma" width="370" height="300" alt="bellatormma"/>
                 </a>

                 <a href ="./EventTwo">
                 <img src={edclv2018} className="edclv2018picture" width="370" height="300" alt="edclv2018"/>
                 </a>

                 <a href="./EventThree">
                 <img src={lakings} className="lakings" width="370" height="300" alt="lakings"/>
                 </a>

                 <a href="./EventFour">
                 <img src={lakerslogo} className="lakerslogo" width="370" height="300" alt="lakerslogo"/>
                 </a>

                 <a href="./EventFive">
                 <img src={ramslogo}  className="ramslogo" width="370" height="300" alt="ramslogo"/>
                 </a>

                 <a href="./EventSix">
                 <img src={dodgerslogo}  className="dodgerslogo" width="370" height="300" alt="dodgerslogo"/>
                 </a>

                 <a href="./EventSeven">
                 <img src={ninerslogo} className="ninerslogo" width="370" height="300" alt="ninerslogo"/>
                 </a>

                 <a href="./EventEight">
                 <img src={raiderslogo} className="raiderslogo" width="370" height="300" alt="raiderslogo"/> 
                 </a>
                
                 
                 </div>
            </div>

        );
    }
}
 
export default Events;