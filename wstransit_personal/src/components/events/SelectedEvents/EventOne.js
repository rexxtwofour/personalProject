import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventOne.css';
import joeydavis from '../../../images/joeydavis.jpg';
import MapContainer from './Maps';





class EventOne extends Component {
    state = {  }
    render() { 
        return ( 
           <div>
            {/* <div className="selectedevents"> */}
            
                  <div className="bellatorfight">
                    <img src={joeydavis} alt="firstevent"/>
                  </div>
            {/* </div> */}
                    <div className="eventTitle">
                    Bellator 55
                    </div>
            <div className="rideinfo">
                    <div className="pickupdropoff">
                      <p>Pickup/Dropoff Location</p>
                      <p>Street:3900 W Manchester Blvd</p>
                      <p>City:Inglewood, CA</p>
                      <p>Zip:90305</p>
                    </div>
            <div className="venue">
              Venue: The Forum
            </div> 
            {/* googlemap location  */}
            </div>
                  <div className="fightdatetime">
                    Saturday Sept 11,2018
                  </div>        
{/* this is where the googlemap api goes */}

<div className="mapstyle">
 <MapContainer/> 


</div>


               <div className="bellatorparagraph">
                
                       Be there as we support and watch Joey Davis beat up a guy to a bloody pulp!!
                
               </div>
             
            
            </div>
         );
    }
}
 
export default EventOne; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
