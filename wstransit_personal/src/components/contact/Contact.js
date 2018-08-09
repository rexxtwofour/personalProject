import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './contact.css';
import facebooklogo from '../../images/facebooklogo.png';
import twittervector from '../../images/twittervector.png';
import newinstagramlogo from '../../images/newinstagramlogo.png';



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


         <div className="socialmedia">

                 <a href="https://www.facebook.com/WSTransit/">
                 <img src={facebooklogo} className="facebook" width="300" height="200" alt="facebook"/> 
                 </a>


                 <a href="https://twitter.com/ws_transit">
                 <img src={twittervector} className="twitter" width="300" height="200" alt="twitter"/> 
                 </a>
         
                <a href="https://www.instagram.com/ws_transit/">
                <img src={newinstagramlogo} className="instagram" width="300" height="200" alt="instagram"/> 
                </a>
     </div>


    
        </div>



    )
   }
}



export default Contact;






     // the dead saloon
     // ostrich sans light
     // old scotch vintage regular
     // old scotch vintage shadow regular
     // old scotch shadow regular
     // old scotch modern regular
     // nashville regular
     // galacticastle light
     // elizabeth regular
     // disco regular
     // daniel regular
     // boomshell font\

     //googlefonts

    //https://fonts.google.com/specimen/Shadows+Into+Light
    //https://fonts.google.com/specimen/Architects+Daughter
    //https://fonts.google.com/specimen/Syncopate