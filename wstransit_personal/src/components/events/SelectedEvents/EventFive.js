import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventFive.css';







class EventFive extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="selectedevents">
            
          <div className="ramsgame">
           <img src=" picture url " alt="first event" height="42" width="42"/>
          </div>


          <div className="eventitle">Rams vs Seahawks</div>
          <div className="pickupdropoff">
            Street:
            City:
            Zip:
          </div>
          <div className="venue">
            Venue: Los Angeles Stadium-Inglewood,CA
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
 
export default EventFive; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
