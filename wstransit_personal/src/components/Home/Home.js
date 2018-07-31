import React, { Component } from 'react';
import westsidetransitlogo from './westsidetransitlogo.jpg';
import  './Home.css';



class Home extends Component {
    render(){
        return(

        <div>

            <div className="westfont">Westside Transit</div>
            <div className="westsidelogo">
                 <img className= "westsidepic" src={westsidetransitlogo} alt="westsidetransitlogo"/>
            </div>
         



        </div>
        



        )
    
    }
}


export default Home;

//