import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';







class CreateEvent extends Component {
    constructor() {
        super();
        this.state = {  
            fullname: '',
            street: '',
            city: '',
            zip: '',
            phone: '',
            email: '',
            eventcomments: '',


        }
    }


     handleChangeFullName = (e) => {
         this.setState({ name: e.target.value })
     }

     handleChangeStreet= (e) => {
         this.setState({ street: e.target.value })
     }

     handleChangeCity= (e) => {
         this.setState({ city: e.target.value })
     }

     handleChangeZip= (e) => {
         this.setState({ zip: e.target.value })
     }

     handleChangePhone= (e) => {
         this.setState({ phone: e.target.value })
     }

     handleChangeEmail= (e) => {
         this.setState({ email: e.target.value })
     }

     handleChangeEventComments= (e) => {
         this.setState({ eventcomments: e.target.value })
     }





     createEvent = () => {
         let add = {
            fullname: this.state.name,
            street: this.state.street,
            city: this.state.city,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email,
            eventcomments: this.state.eventcomments
         };
         console.log('add', add)
         axios.post('/api/addcreateEvent',add).then(results => {
             console.log('checking the created event', results)
             this.setState({ eventinformation: results.data});
         })
     }






    render() { 
        return ( 

            <div className="createvent">
                <div>Create Event</div>
                   
            </div>

               

            <input onChange={this.handleChangeFullName}placeholder="fullname"/>
            <input onChange={this.handleChangeStreet}placeholder="street"/>
            <input onChange={this.handleChangeCity}placeholder="city"/>
            <input onChange={this.handleChangeZip}placeholder="zip"/>
            <input onChange={this.handleChangePhone}placeholder="phone"/>
            <input onChange={this.handleChangeEmail}placeholder="email"/>
            <input onChange={this.handleChangeEventComments}placeholder="eventcomments"/>
            <button onClick={this.createEvent}className="submit">Submit</button>
            


          


         )
    }
}
 
export default CreateEvent;