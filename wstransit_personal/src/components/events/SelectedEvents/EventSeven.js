import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventSeven.css';
import jimmyg from '../../../images/jimmyg.jpg';
import MapContainer from './Maps';





class EventSeven extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
            
            
          <div className="jimmyg ">
            <img src={ jimmyg }  alt="seventh event" />
          </div>
          {/* height="42" width="42" */}

          <div className="eventTitle7">
           49ers vs Rams
          </div>

          <div className="rideinfo7">
          <div className="pickupdropoff7">
          <p>Pickup/Dropoff Location</p>
          <p> Street: 4900 Centennial Blvd</p>
          <p>City:Santa Clara, CA </p>
          <p>Zip:95054</p>
          </div>
          
          <div className="venue7">
            Venue: Levi's Stadium
          </div> 
          {/* googlemap location  */}
          <div className="datetime7">
           October 21, 2018
          </div>

                      <div className="mapstyle7">
                        <MapContainer/> 


                      </div>

          <div className="ninersparagraph">
            
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
 
export default EventSeven; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
