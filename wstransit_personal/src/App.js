import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import { Link } from 'react-router-dom'
// import routes from './routes';



class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="App-header">
       <div className="home">Home</div>

        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
            <span class="caret custom-style"></span></button>
            <ul class="dropdown-menu">
            <li><a href="#">Create Account</a></li>
            <li><a href="#">Create Event</a></li>
            <li><a href="#">Events</a></li>
          <li><a href="#">Event Reviews</a></li>
            </ul>
        </div>



       </div>
      </div>
    );
  }
}

export default App;

          // <Link to="/" className='links'>Home</Link>
          // <Link to="/createaccount" className='links'>Create Account</Link> 
          // <Link to="/createevent" className='links'>Create Event</Link>
          // <Link to="/events" className='links'>Events</Link> 
          // <Link to="/selectedevent" className='links'>Selected Event</Link>
          // <Link to="/eventreviews" className='links'>Event Reviews</Link>  
