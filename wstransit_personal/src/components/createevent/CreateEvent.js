import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
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
            eventInformationInventory: [],
            editText: '',
            selectedEvent: '',

        }
    }


    componentDidMount(){
        // axios.get('/userdata').then(user => {
        //     console.log(user)
        // })
        axios.get(`/api/eventInformationInventory`).then(response => {
            console.log('componentdidmount response',response)
          this.setState({
            eventInformationInventory: response.data
          })
        })
      }



    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }

//create event
     createEvent = () => {
        let add = {
           fullname: this.state.fullname,
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
            this.setState({ eventInformationInventory: results.data});
        }).catch(error => {
            console.log(error)
        })
    }



//read event

displayCreatedEvent = () => {
    let display = {
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
     console.log('looking up events', display)
     axios.get('/api/userEvents',display).then(results => {
         console.log('showing if events worked', results)
         this.setState({ eventInformationInventory: results.data});
     }).catch(error => {
         console.log(error)
     })
    }




// update event
editHandler = (e) => {
    this.setState({
      id: e,
    })
  }




editEventInformation = () => {
    let edit = {
            id: this.state.selectedEvent,
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
  axios.put(`/api/eventInformationInventoryEdit`, edit).then(e => {
      console.log('update response',e)
  }).catch(error => {
    console.log(error)
})
console.log(edit)
}


//delete event



deleteEventInformation = (id) => {
    console.log(id, this.state.selectedEvent)
    axios.delete(`/api/eventInformationdelete/${id}`).then(results => {
        console.log('showing if delete events', results)
        this.setState({ eventInformationInventory: results.data});
    }).catch(error => {
        console.log(error)
    })
  }

     
// is a componentDidMount needed in the render to constantly show all the events from the database?

    render() { 
        console.log(this.state.selectedEvent);
        let event = this.state.eventInformationInventory.map(e =>{
            let style;
            if(e.id === this.state.selectedEvent){
                style = {
                    background: 'dark grey'
                }
            }else {
                style = {
                    background:'initial'
                }
            }




            
            return <div style={style} key={e.id} onClick={()=>this.setState({selectedEvent: e.id})}>
                        <div className="dynamics">
                        <div className="fullnamedynamic"> {e.fullname}</div>
                        <div className="streetdynamic"> {e.street} </div>
                        <div className="citydynamic"> {e.city}</div>
                        <div className="zipdynamic">  {e.zip}</div>
                        <div className="phonedynamic">{e.phone}</div>
                        <div className="emaildynamic"> {e.email}</div>
                        <div className="datetimedynamic"> {e.datetime}</div>
                        <div className="locationdynamic">  {e.location}</div>
                        <div className="eventcommentsdynamic">{e.eventcomments}</div>
                        <button onClick={()=>this.setState({selectedEvent: e.id})}>Edit</button>
                        <button onClick={()=>this.deleteEventInformation(e.id)}>Delete</button>
                        </div>
                    
                        </div>
        })

        return ( 
            <div>
            
                <div className="createEventTitle">Create Event</div>
            
                <div className="createEvent">
               

            <input onChange={ e => this.handleChange('fullname',e.target.value)}className="fullname" placeholder="fullname"></input>
            <input onChange={ e => this.handleChange( 'street', e.target.value)}className="street" placeholder="street"></input>
            <input onChange={ e => this.handleChange( 'city', e.target.value)}className="city" placeholder="city"></input>
            <input onChange={ e => this.handleChange( 'zip', e.target.value)}className="zip" placeholder="zip"></input>
            <input onChange={ e => this.handleChange( 'phone', e.target.value)}className="phone" placeholder="phone"></input>
            <input onChange={ e => this.handleChange( 'email', e.target.value)}className="email" placeholder="email"></input>
            <input onChange={ e => this.handleChange( 'datetime', e.target.value)}className="datetime" type='datetime-local' ></input>
            <input onChange={ e => this.handleChange( 'location', e.target.value)}className="location" placeholder="location"></input>
            <input onChange={ e => this.handleChange( 'eventcomments', e.target.value)}className= "eventComments"placeholder="eventcomments"></input>
            <button onClick={ this.createEvent}className="submitEvent">Submit</button>


            {/* added these two in, don't know if they will work correctly */}
            <button onClick={ () => this.editEventInformation()}className="editInfo">Edit</button>

            {/* <input onChange={ e => this.handleChange( '', e.target.value)}className= "deleteEvent"placeholder="delete event by id"></input> */}
            {/* <button onClick={ () => this.deleteEventInformation()}className="deleteInfo">delete</button> */}



            <div className="display">

                { event }
          
                </div>

                   



                
                </div>
            </div>

         )
    }
}

//something goes in the render method to show the displayed event 
//add created events to the bottom of the page



export default CreateEvent;


