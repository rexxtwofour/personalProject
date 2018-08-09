import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventThree.css';
import kingsvsharks from '../../../images/kingsvsharks.jpg';
import MapContainer from './Maps';





class EventThree extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
            
            
          <div className="kingsvsharks">
            <img src={kingsvsharks}  alt="third event" />
          </div>
          {/* height="42" width="42" */}

          <div className="eventTitle3">
            Kings vs Sharks
          </div>

          <div className="rideinfo3">
          <div className="pickupdropoff3">
          <p>Pickup/Dropoff Location</p>
          <p> Street: 1111 S Figueroa St</p>
          <p>City:Los Angeles, CA</p>
          <p>Zip:90015</p>
          </div>
          
          <div className="venue3">
            Venue: Staples Center
          </div> 
          {/* googlemap location  */}
          <div className="datetime3">
            October 5th, 2018
          </div>

                      <div className="mapstyle3">
                        <MapContainer/> 


                      </div>

          <div className="kingsparagraph">
            
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
 
export default EventThree; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
