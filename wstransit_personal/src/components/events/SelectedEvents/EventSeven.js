import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventSeven.css';







class EventSeven extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="selectedevents">
            
          <div className="ninersgame">
           <img src=" picture url " alt="first event" height="42" width="42"/>
          </div>

          <div className="eventitle">San Francisco 49ers vs Arizona Cardinals</div>
          <div className="pickupdropoff">
            Street:
            City:
            Zip:
          </div>
          <div className="venue">
            Venue: Levis Stadium Santa Clara,CA
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
 
export default EventSeven; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
