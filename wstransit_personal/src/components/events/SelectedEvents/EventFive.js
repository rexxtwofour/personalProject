import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventFive.css';
import laRamsaction from '../../../images/laRamsaction.jpg';
import MapContainer from './Maps';





class EventFive extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
            
            
          <div className="laRamsaction">
            <img src={laRamsaction}  alt="fifth event" />
          </div>
          {/* height="42" width="42" */}

          <div className="eventTitle5">
           Rams vs Cardinals
          </div>

          <div className="rideinfo5">
          <div className="pickupdropoff5">
          <p>Pickup/Dropoff Location</p>
          <p> Street: 3939 S. Figueroa St.</p>
          <p>City:Los Angeles, CA</p>
          <p>Zip:90037</p>
          </div>
          
          <div className="venue5">
            Venue: Los Angeles Memorial Coliseum
          </div> 
          {/* googlemap location  */}
          <div className="datetime5">
            November 11, 2018
          </div>

                      <div className="mapstyle5">
                        <MapContainer/> 


                      </div>

          <div className="ramsparagraph">
            
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            
          </div>
            
            
          </div>
          </div>

         );
    }
}
 
export default EventFive; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
