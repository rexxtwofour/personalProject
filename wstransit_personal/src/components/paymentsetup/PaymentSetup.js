import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './paymentsetup.css';

export default class PaymentSetup extends Component {
  render() {
    return (
      <div>
           <div className = "payment" >Payment setup</div>
            <div className="paymentlayout">
       
       



        <div className="billinginfo">Billing Info</div>



        <p>Full Name</p>
        <div className="fullname">
        <input type="text"/>
        </div>
        
        <p>Address</p>
        <div className="address">
        <input type="text"/>
        </div>

        <p>City</p>
        <div className="city">
        <input type="text"/>
        </div>

        <p>Zip</p>
        <div className="zip">
        <input type="text"/>
        </div>

        <p>Country</p>
        <div className="country">
        <input type="text"/>
        </div>

      
        <div className="creditcardinfo">Credit Card Info</div>
       
        
        <p>Credit Card</p>
        <div className="creditcardnumber">
        <input type="text"/>
        </div>
        <p>Cvv number</p>
        <div className="cvvnumber">
        <input type="text"/>
        </div>

        <p>Card Holder Name</p>
        <div className="cardholdername">
        <input type="text"/>
        </div>

        <p>Expriration Date</p>
        <div className="expirationdate">
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

