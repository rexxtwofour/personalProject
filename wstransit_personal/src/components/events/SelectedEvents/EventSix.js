import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventSix.css';
import dodgerbaseball from '../../../images/dodgerbaseball.jpg';
import MapContainer from './Maps';





class EventSix extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
            
            
          <div className="dodgerbaseball">
            <img src={dodgerbaseball}  alt="sixth event" />
          </div>
          {/* height="42" width="42" */}

          <div className="eventTitle6">
           Dodgers vs Padres
          </div>

          <div className="rideinfo6">
          <div className="pickupdropoff6">
          <p>Pickup/Dropoff Location</p>
          <p> Street: 1000 Vin Scully Ave</p>
          <p>City:Los Angeles, CA</p>
          <p>Zip:90012</p>
          </div>
          
          <div className="venue6">
            Venue: Dodger Stadium
          </div> 
          {/* googlemap location  */}
          <div className="datetime6">
            September 23, 2018
          </div>

                      <div className="mapstyle6">
                        <MapContainer/> 


                      </div>

          <div className="dodgersparagraph">
            
            It's time for Dodger Baseball!!! We're heading to Blue Heaven 
            aka Dodger stadium ready for full Hollywood type date. Bring your hats and shades!
            
          </div>
            
            
          </div>
          </div>

         );
    }
}
 
export default EventSix; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
