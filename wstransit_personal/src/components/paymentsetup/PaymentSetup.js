import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './paymentsetup.css';

export default class PaymentSetup extends Component {
  render() {
    return (
      <div>
           <div className = "payment" >Payment setup</div>
            <div className="paymentlayout">
       
       



        <div className="billinginfo">Billing Info</div>



        
        <div className="fullname">
        Full Name
        <input type="text"/>
        </div>
        
      
        <div className="address">
        Address
        <input type="text"/>
        </div>

       
        <div className="city">
        City
        <input type="text"/>
        </div>

        
        <div className="zip">
        Zip
        <input type="text"/>
        </div>

        
        <div className="country">
        Country
        <input type="text"/>
        </div>

      
        <div className="creditcardinfo">Credit Card Info</div>
       
        
        
        <div className="creditcardnumber">
        Credit Card
        <input type="text"/>
        </div>


        
        <div className="cvvnumber">
        Cvv number
        <input type="text"/>
        </div>

        
        <div className="cardholdername">
        Card Holder Name
        <input type="text"/>
        </div>

       
        <div className="expirationdate">
        Expriration Date
        <input type="text"/>
        </div>


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

