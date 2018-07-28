import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';






class Events extends Component {
    state = {  }
    render() { 
        return (  


<div className="events">
               
               <div>Events</div>



                </div>
                <a href="">
                <img src="/Users/ericrivera/devmtn/week6/wstransit_personal/images/bellator mma.jpg" width="500" height="600" alt="bellatormma"/>
                </a>


                <a href="">
                <img src="/Users/ericrivera/devmtn/week6/wstransit_personal/images/edclv2018.jpg" width="500" height="600" alt="edclv2018"/>
                </a>

                <a href="">
                <img src="/Users/ericrivera/devmtn/week6/wstransit_personal/images/lakings.png" width="500" height="600" alt="lakings"/>
                </a>

                <a href="">
                <img src="/Users/ericrivera/devmtn/week6/wstransit_personal/images/lakers.png" width="500" height="600" alt="lakerslogo"/>
                </a>

                <a href="">
                <img src="/Users/ericrivera/devmtn/week6/wstransit_personal/images/rams.png" width="500" height="600" alt="ramslogo"/>
                </a>

                <a href="">
                <img src="/Users/ericrivera/devmtn/week6/wstransit_personal/images/ladodgers.gif" width="500" height="600" alt="dodgerslogo"/>
                </a>

                <a href="">
                <img src="/Users/ericrivera/devmtn/week6/wstransit_personal/images/niners.png" width="500" height="600" alt="ninerslogo"/>
                </a>

                <a href="">
                <img src="/Users/ericrivera/devmtn/week6/wstransit_personal/images/raiders.png" width="500" height="600" alt="raiderslogo"/> 
                </a>

        );
    }
}
 
export default Events;