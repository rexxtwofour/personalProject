import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EventOne from './components/Events/SelectedEvents/EventOne';
// import EventTwo from './components/Events/SelectedEvents/EvenTwo';
// import EventThree from './components/Events/SelectedEvents/EventThree';
// import EventFour from './components/Events/SelectedEvents/EventFour';
// import EventFive from './components/Events/SelectedEvents/EventFive';
// import EventSix from './components/Events/SelectedEvents/EventSix';
// import EventSeven from './components/Events/SelectedEvents/EventSeven';
// import EventEight from './components/Events/SelectedEvents/EventEight';




export default function selectedEventRoutes (){

    return(
        <Switch>
            <Route component={ EventOne } exact path ="/EventOne " />
            {/* <Route component={ EventTwo } exact path ="/EventTwo" />
            <Route component={ EventThree } exact path ="/EventThree" />
            <Route component={ EventFour } exact path ="/EventFour" />
            <Route component={ EventFive } exact path ="/EventFive" />
            <Route component={ EventSix } exact path ="/EventSix" />
            <Route component={ EventSeven } exact path ="/EventSeven" />
            <Route component={ EventEight } exact path ="/EventEight" /> */}
        </Switch>


        
        )   
    
}