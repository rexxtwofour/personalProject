import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import axios from 'axios';
import './eventreviews.css';



class EventReviews extends Component {
    constructor() {
        super();
        this.state = { 
            eventName: '',
            postTitle: '',
            eventreviewcomments: '',
         }
    }

    handleChangeEventName = (e) => {
        this.setState({ eventName: e.target.value })
    }

    handleChangePostTitle = (e)  => {
        this.setState({ postTitle: e.target.value })
    }

    handleChangeEventReviewCommments = (e) => {
        this.setState({ eventreviewcomments: e.target.value})
    }


    eventReviewAdded = () => {
        let addReview = {
            eventName: this.state.eventName,
            postTitle: this.state.age,
            eventreviewcomments: this.state.eventreviewcomments,
        };
        console.log ('addReview', addReview)
        axios.post('/api/eventReviewAdded', addReview).then(results => {
            console.log('checking the added review', results)
            this.setState({ eventinformation: results.data})
        })
    }




// create functionality for event review button 
//display review below then input section 

    render() { 
        return ( 

            <div>

            <div className="eventText">Event Reviews</div>                

            <div className="eventreviews">
                
            <input onChange={this.handleChange}className="eventName"placeholder="Event name"></input>
            <input onChange={this.handleChange}className="postTitle"placeholder="Post Title"></input>
            <input onChange={this.handleChange}className="eventReviewComments"placeholder="Event review comments"></input>
            <button onClick={this.submitReview}className="submitReview">Submit</button>

            </div>
            </div>

            


         );
    }
}
 
export default EventReviews;


