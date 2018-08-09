import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventTwo.css';
import edcbasspod from '../../../images/edcbasspod.jpg';
import MapContainer from './Maps';





class EventTwo extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
            
            
          <div className="edclv2018">
            <img src={edcbasspod}  alt="second event" />
          </div>
          {/* height="42" width="42" */}

          <div className="eventTitle2">
            EDC Las Vegas 2018
          </div>

          <div className="rideinfo2">
          <div className="pickupdropoff2">
          <p>Pickup/Dropoff Location</p>
          <p> Street:7000 Las Vegas Boulevard North</p>
          <p>City:Las Vegas, NV</p>
          <p>Zip:89115</p>
          </div>
          
          <div className="venue2">
            Venue: Las Vegas Motor Speedway
          </div> 
          {/* googlemap location  */}
          <div className="datetime2">
            May 18,19,20, 2018
          </div>

                      <div className="mapstyle2">
                        <MapContainer/> 


                      </div>

          <div className="edcparagraph">
            
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
 
export default EventTwo; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
