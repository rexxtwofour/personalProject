import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './EventFour.css';







class EventFour extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="selectedevents">
            
          <div className="lakersgame">
           <img src=" picture url " alt="first event" height="42" width="42"/>
          </div>

          
          <div className="eventitle">Lakers vs Celtics</div>
          <div className="pickupdropoff">
            Street:
            City:
            Zip:
          </div>
          <div className="venue">
            Venue: Staples Center- Los Angeles,CA
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
 
export default EventFour; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
