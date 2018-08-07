import React, { Component } from 'react';
import './App.css';
import routes from './routes';
// import SelectedEventRoutes from './selectedEventRoutes';



// import axios from 'axios';
// import { Link } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation';





class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="App-header">
    
       <Navigation/>
      {routes()}
      {/* {SelectedEventRoutes()} */}


      </div>








       </div>

        
        
        




// <Link to="/" className='links'>Home</Link>
// <Link to="/createaccount" className='links'>Create Account</Link> 
// <Link to="/createevent" className='links'>Create Event</Link>
// <Link to="/events" className='links'>Events</Link> 
// <Link to="/selectedevent" className='links'>Selected Event</Link>
// <Link to="/eventreviews" className='links'>Event Reviews</Link>   







    );
  }
}

export default App;



        //   <div class="dropdown">
        //     <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
        //     <span class="caret custom-style"></span></button>
        //     <ul class="dropdown-menu">
        //     <li><a href="createaccount">Create Account</a></li>
        //     <li><a href="createevent">Create Event</a></li>
        //     <li><a href="Events">Events</a></li>
        //   <li><a href="eventre">Event Reviews</a></li>
        //     </ul>
        // </div>