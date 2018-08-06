import React, { Component } from 'react';
import westsidetransitlogo from './westsidetransitlogo.jpg';
import  './Home.css';
import promovideo from '/Users/ericrivera/devmtn/week6/wstransit_personal/src/images/promovideo.mov';



class Home extends Component {
    render(){
        return(

        <div>

            <div className="westfont">Westside Transit</div>
            <div className="westsidelogo">
                 <img className= "westsidepic" src={westsidetransitlogo} alt="westsidetransitlogo"/>
            </div>
         

            <div className =  "container">
            <video  className = "video "  autoPlay loop controls>
           
               <source src ={promovideo}/>
             
            </video>
           
            </div>


        </div>
        



        )
    
    }
}


export default Home;

//