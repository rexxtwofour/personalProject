import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventEight.css';







class EventEight extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="selectedevents">
            
          <div className="raidersgame">
           <img src=" picture url " alt="first event" height="42" width="42"/>
          </div>

          <div className="eventitle">Las Vegas Raiders Vs Denver Broncos</div>
          <div className="pickupdropoff">
            Street:
            City:
            Zip:
          </div>
          <div className="venue">
            Venue: Las Vegas Stadium - Las Vegas, NV
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
 
export default EventEight; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
