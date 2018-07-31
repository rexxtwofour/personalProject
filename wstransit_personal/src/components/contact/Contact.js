import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './contact.css';
// import facebookvector from '../facebookvector.jpg';
// import twittervector from '../twittervector.png';
// import instagramvector from '../instagramvector.jpg';



class Contact extends Component {
   render() {
    return (
        <div>

            <div className="contactTitle">Contact</div>

        <div className ="contact">
           
        <div className="company">Westside Transit</div>
        <div className="number">+562-201-2488</div>
        <div className="email">WestsideTransit@gmail.com</div>
        <div className="address">8232 San Luis Potosi</div>
            



        <div className="copyright">Copyright @ weststidetransit</div>

        </div> 

    
        </div>



    )
   }
}



export default Contact;



        // <div className="socialmedia">
        //         <img src={facebookvector} width="50" height="50" alt="facebook"/> 
        //         <img src={twittervector} width="50" height="50" alt="twitter"/> 
        //         <img src={instagramvector} width="50" height="50" alt="instagram"/> 
        // </div>
