import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventTwo.css';
// import edc-stages-basspod-gallery-2-1080x7201from '/Users/ericrivera/devmtn/week6/wstransit_personal/src/images/edc-stages-basspod-gallery-2-1080x7201.jpg';






class EventTwo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="selectedevents">
            
          <div className="edclv2018">
           <img src=" " alt="first event" height="42" width="42"/>
          </div>
          
          <div className="eventitle">EDC Las Vegas 2018</div>
          <div className="pickupdropoff">
            Street:
            City:
            Zip:
          </div>
          <div className="venue">
            Venue: Las Vegas Motor Speedway
          </div> 
          {/* googlemap location  */}
          <div className="datetime">
            Saturday 11,2018
          </div>

          <div className="eventinfo">
            <p>
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            this  is a paragraph of text for each event the company is having.
            </p>
          </div>
            
            
            </div>

            

















         );
    }
}
 
export default EventTwo; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
