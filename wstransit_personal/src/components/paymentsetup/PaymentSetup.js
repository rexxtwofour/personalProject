import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './paymentsetup.css';
import Crypto from './Crypto';

export default class PaymentSetup extends Component {
  render() {
    return (
      <div>
           
           
           
           <div className = "payment" >Payment Setup</div>
            <div className="paymentlayout">
       
       
        <div className="billinginfo">Billing Info</div>
        
        <input  className="paymentfullname"placeholder="Full Name"type="text"/>
      
        <input  className="paymentaddress"placeholder="Address"type="text"/>
      
        <input  className="paymentcity"placeholder=" City"type="text"/>
      
        <input  className="paymentzip"placeholder="Zip"type="text"/>
      
        <input  className="paymentcountry"placeholder="  Country"type="text"/>
       

      
        <div className="creditcardinfo">Credit Card Info</div>
       
        
        


<input  className="creditcardnumber"placeholder="Credit Card"type="text"/>

<input  className="cvvnumber"placeholder="Cvv number"type="text"/>

<input  className="cardholdername"placeholder="Card Holder Name"type="text"/>

<input  className="expirationdate"placeholder="Expriration Date"type="text"/>




        </div>

            <div className="accept">We also accept Crypto Currency!</div>
            
            <div className="cryptostyle">
            
            <Crypto/>
            </div>

      </div>
    )
  }
}









        // <form class="billingcontainer">

        // <label class=""><b>Full Name</b></label>
        // <input class="thebox" type="text">

        // <label class="w3-text-blue"><b>Address</b></label>
        // <input class="w3-input w3-border" type="text">

        // <label class="w3-text-blue"><b>City</b></label>
        // <input class="w3-input w3-border" type="text">

        // <label class="w3-text-blue"><b>Zip</b></label>
        // <input class="w3-input w3-border" type="text">

        // <label class="w3-text-blue"><b>Country</b></label>
        // <input class="w3-input w3-border" type="text">

        // <label class="w3-text-blue"><b>Credit Card Number</b></label>
        // <input class="w3-input w3-border" type="text">

        // <label class="w3-text-blue"><b>CVV Number</b></label>
        // <input class="w3-input w3-border" type="text">

        // <label class="w3-text-blue"><b>Cardholder Name</b></label>
        // <input class="w3-input w3-border" type="text">

        // <label class="w3-text-blue"><b>Expiration Date</b></label>
        // <input class="w3-input w3-border" type="text">

        // <button class="w3-btn w3-blue">Register</button>

        // </form>

