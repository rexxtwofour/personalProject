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


//setup up links to go to selected events pages 
//collect photos and information to be displayed on those pages

class Events extends Component {
    state = { 


     }
    render() { 
        return (  

            <div>

                  <div className="eventsTitle">Events</div>

                <div className="events">
            
              
                 <a href="/Users/ericrivera/devmtn/week6/wstransit_personal/src/components/Events/SelectedEvents/EventOne.js">
                 <img src={bellatormma} className="bellatormma" width="370" height="300" alt="bellatormma"/>
                 </a>

                 <a href="/Users/ericrivera/devmtn/week6/wstransit_personal/src/components/Events/SelectedEvents/EventTwo.js">
                 <img src={edclv2018} className="edclv2018"  width="370" height="300" alt="edclv2018"/>
                 </a>

                 <a href="/Users/ericrivera/devmtn/week6/wstransit_personal/src/components/Events/SelectedEvents/EventThree.js">
                 <img src={lakings} className="lakings" width="370" height="300" alt="lakings"/>
                 </a>

                 <a href="/Users/ericrivera/devmtn/week6/wstransit_personal/src/components/Events/SelectedEvents/EventFour.js">
                 <img src={lakerslogo} className="lakerslogo" width="370" height="300" alt="lakerslogo"/>
                 </a>

                 <a href="/Users/ericrivera/devmtn/week6/wstransit_personal/src/components/Events/SelectedEvents/EventFive.js">
                 <img src={ramslogo}  className="ramslogo" width="370" height="300" alt="ramslogo"/>
                 </a>

                 <a href="/Users/ericrivera/devmtn/week6/wstransit_personal/src/components/Events/SelectedEvents/EventSix.js">
                 <img src={dodgerslogo}  className="dodgerslogo" width="370" height="300" alt="dodgerslogo"/>
                 </a>

                 <a href="/Users/ericrivera/devmtn/week6/wstransit_personal/src/components/Events/SelectedEvents/EventSeven.js">
                 <img src={ninerslogo} className="ninerslogo" width="370" height="300" alt="ninerslogo"/>
                 </a>

                 <a href="/Users/ericrivera/devmtn/week6/wstransit_personal/src/components/Events/SelectedEvents/EventEight.js">
                 <img src={raiderslogo} className="raiderslogo" width="370" height="300" alt="raiderslogo"/> 
                 </a>
                
                 
                 </div>
            </div>

        );
    }
}
 
export default Events;