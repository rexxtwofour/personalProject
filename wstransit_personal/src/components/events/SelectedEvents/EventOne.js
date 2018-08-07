import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import './EventOne.css';
// import joeydavis from '/Users/ericrivera/devmtn/week6/wstransit_personal/src/images/joeydavis.jpg';
import MapContainer from './Maps';





class EventOne extends Component {
    state = {  }
    render() { 
        return ( 
           <div>
            <div className="selectedevents">
            
                  <div className="bellatorfight">
                    <img src="  " alt="first event" height="100" width="100"/>
                  </div>
            </div>
                    <div className="eventTitle">
                    Bellator 55
                    </div>
            <div className="rideinfo">
                    <div className="pickupdropoff">
                      <p>Pickup/Dropoff Location-</p>
                      <p>Street:</p>
                      <p>City:</p>
                      <p>Zip:</p>
                    </div>
            <div className="venue">
              Venue: The Forum-Inglewood,CA
            </div> 
            {/* googlemap location  */}
            </div>
                  <div className="fightdatetime">
                    Saturday 11,2018
                  </div>        
{/* this is where the googlemap api goes */}


<MapContainer/>

               <div className="bellatorparagraph">
                
                       This  is a paragraph of text for each event the company is having.
                       This  is a paragraph of text for each event the company is having.
                       This  is a paragraph of text for each event the company is having.
                       This  is a paragraph of text for each event the company is having.
                       This  is a paragraph of text for each event the company is having.
                       This  is a paragraph of text for each event the company is having.
                
               </div>
             
            
            </div>
         );
    }
}
 
export default EventOne; 




// //display selected event with picture, information on the event pic up and drop off location



        
 
