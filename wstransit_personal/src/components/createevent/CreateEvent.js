import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './createevent.css';







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
            datetime: '',
            location: '',
            eventcomments: '',
            eventinformation: []

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

     handleChangeDatetime= (e) => {
        this.setState({ datetime: e.target.value })
    }
          
    handleChangelocation= (e) => {
        this.setState({ location: e.target.value })
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
            datetime: this.state.datetime,
            location: this.state.location,
            eventcomments: this.state.eventcomments
         };
         console.log('add', add)
         axios.post('/api/addcreateEvent',add).then(results => {
             console.log('checking the created event', results)
             this.setState({ eventinformation: results.data});
         })
     }



     

    // displayCreatedEvent = () => {
    //     let display = {
    //         fullname: this.state.name,
    //         street: this.state.street,
    //         city: this.state.city,
    //         zip: this.state.zip,
    //         phone: this.state.phone,
    //         email: this.state.email,
    //         datetime: this.state.datetime,
    //         location: this.state.location,
    //         eventcomments: this.state.eventcomments
    //      };
    //      console.log('looking up events', display)
    //      axios.get('/api/userEvents',display).then(results => {
    //          console.log('showing if events worked', results)
    //          this.setState({ eventinformation: results.data});
    //      })




    //     }


    // }     





    render() { 
        let event = this.state.eventinformation.map(entry => {
            return <div>
                    <div className="dynamics">
                    <div className="fullnamedynamic"> {entry.fullname}</div>
                    <div className="streetdynamic"> {entry.street} </div>
                    <div className="citydynamic"> {entry.city}</div>
                    <div className="zipdynamic">  {entry.zip}</div>
                    <div className="phonedynamic">{entry.phone}</div>
                    <div className="emaildynamic"> {entry.email}</div>
                    <div className="datetimedynamic"> {entry.datetime}</div>
                    <div className="locationdynamic">  {entry.location}</div>
                    <div className="eventcommentsdynamic">{entry.eventcomments}</div>
                    </div>
                   
                   
                    </div>
        })
        return ( 
            <div>
            
                <div className="createEventTitle">Create Event</div>
            
                <div className="createEvent">
               

            <input onChange={this.handleChangeFullName}className="fullname" placeholder="fullname"></input>
            <input onChange={this.handleChangeStreet}className="street" placeholder="street"></input>
            <input onChange={this.handleChangeCity}className="city" placeholder="city"></input>
            <input onChange={this.handleChangeZip}className="zip" placeholder="zip"></input>
            <input onChange={this.handleChangePhone}className="phone" placeholder="phone"></input>
            <input onChange={this.handleChangeEmail}className="email" placeholder="email"></input>
            <input onChange={this.handleChangeDatetime}className="datetime" type='datetime-local' ></input>
            <input onChange={this.handleChangelocation}className="location" placeholder="location"></input>
            <input onChange={this.handleChangeEventComments}className= "eventComments"placeholder="eventcomments"></input>
            <button onClick={this.createEvent}className="submit">Submit</button>
                   
            </div>

        

                { event }
          


            </div>

         )
    }
}

//something goes in the render method to show the displayed event 



export default CreateEvent;


//add created events to the bottom of the page