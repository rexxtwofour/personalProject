import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventOne.css';







class EventOne extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="selectedevents">
            
          <div className="belltorfight">
           <img src=" picture url " alt="first event" height="100" width="100"/>
          </div>

          <div className="eventitle">Belltor 55</div>
          <div className="pickupdropoff">
            Street:
            City:
            Zip:
          </div>
          <div className="venue">
            Venue: The Forum-Inglewood,CA
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
 
export default EventOne; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
