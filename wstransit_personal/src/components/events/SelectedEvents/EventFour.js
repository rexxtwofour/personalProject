import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventFour.css';
import hollywoodnightsLakers from '../../../images/hollywoodnightsLakers.png';
import MapContainer from './Maps';





class EventFour extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
            
            
          <div className="hollywoodnightsLakers">
            <img src={hollywoodnightsLakers}  alt="fourth event" />
          </div>
          {/* height="42" width="42" */}

          <div className="eventTitle4">
           Lakers vs Warriors
          </div>

          <div className="rideinfo4">
          <div className="pickupdropoff4">
          <p>Pickup/Dropoff Location</p>
          <p> Street: 1111 S Figueroa St</p>
          <p>City:Los Angeles, CA</p>
          <p>Zip:90015</p>
          </div>
          
          <div className="venue4">
            Venue: Staples Center
          </div> 
          {/* googlemap location  */}
          <div className="datetime4">
            January 21st, 2019
          </div>

                      <div className="mapstyle4">
                        <MapContainer/> 


                      </div>

          <div className="lakersparagraph">
            
            Lebron James and the new look Lakers take on the defending back to back champion Warriors.
            Showtime is back!!!
            
          </div>
            
            
          </div>
          </div>

         );
    }
}
 
export default EventFour; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
