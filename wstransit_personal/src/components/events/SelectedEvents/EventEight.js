import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventEight.css';
import lvRaiders from '../../../images/lvRaiders.jpg';
import MapContainer from './Maps';





class EventEight extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
            
            
          <div className="lvRaiders">
            <img src={ lvRaiders }  alt="eighth event"   height="500" width="1000" />
          </div>
       

          <div className="eventTitle8">
           Raiders vs Rams
          </div>

          <div className="rideinfo8">
          <div className="pickupdropoff8">
          <p>Pickup/Dropoff Location</p>
          <p> Street: 7000 Coliseum Way</p>
          <p>City:Oakland, CA </p>
          <p>Zip: 94621</p>
          </div>
          
          <div className="venue8">
            Venue: Oakland Coliseum
          </div> 
          {/* googlemap location  */}
          <div className="datetime8">
           September 10, 2018
          </div>

                      <div className="mapstyle8">
                        <MapContainer/> 


                      </div>

          <div className="raidersparagraph">
            
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
 
export default EventEight; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
