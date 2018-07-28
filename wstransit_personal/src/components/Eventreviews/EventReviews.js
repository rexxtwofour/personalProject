import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';




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






    render() { 
        return ( 


            <div className="eventreviews">

                

                
            <input onChange={this.handleChange}placeholder="eventname"/>
            <input onChange={this.handleChange}placeholder="postTitle"/>
            <input onChange={this.handleChange}placeholder="eventreviewcomments"/>
                

            </div>
            

            

                // <form action="/action_page.php" id="usrform">
                // Event Name: <input type="text" name="usrname">
                // Post Title: <input type="text" name="usrname">
                // <input type="submit">
                // </form>
                // <br>
                // <textarea rows="4" cols="50" name="comment" form="usrform">
                // Review and event!</textarea>


         );
    }
}
 
export default EventReviews;

