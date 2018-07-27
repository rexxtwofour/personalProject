import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';





class EventReviews extends Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        return ( 


            <div className="eventreviews">
                <div>Event Reviews</div>
                <p>Event Name</p>
                <input type="text"/>
                <p>Post Title</p>
                <input type="text"/>
                
                

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

