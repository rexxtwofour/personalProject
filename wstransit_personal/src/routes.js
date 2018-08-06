import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateAccount from './components/Createaccount/CreateAccount';
import CreateEvent from './components/Createevent/CreateEvent';
import Events from './components/Events/Events';
import EventReviews from './components/Eventreviews/EventReviews';
import PaymentSetup from './components/Paymentsetup/PaymentSetup';
import Home from './components/Home/Home';
import SelectedEvents from './components/Selectedevent/SelectedEvent';
import Contact from './components/Contact/Contact';


import EventOne from './components/Events/SelectedEvents/EventOne';
import EventTwo from './components/Events/SelectedEvents/EventTwo';
import EventThree from './components/Events/SelectedEvents/EventThree';
import EventFour from './components/Events/SelectedEvents/EventFour';
import EventFive from './components/Events/SelectedEvents/EventFive';
import EventSix from './components/Events/SelectedEvents/EventSix';
import EventSeven from './components/Events/SelectedEvents/EventSeven';
import EventEight from './components/Events/SelectedEvents/EventEight';



export default function Routes (){
    return(
    <Switch>
        <Route component={ Home } exact path ="/" />
        <Route component={ CreateAccount} path="/CreateAccount" />
        <Route component={ CreateEvent } path="/CreateEvent" />
        <Route component={ Events } path="/Events"/>
        <Route component={ EventReviews } path="/EventReviews" />
        <Route component={ PaymentSetup } path="/PaymentSetup"/>
        <Route component={ SelectedEvents } path="/SelectedEvents"/>
        <Route component={ Contact } path="/Contact"/>



            <Route component={ EventOne } exact path ="/EventOne" />
            <Route component={ EventTwo } exact path ="/EventTwo" />
            <Route component={ EventThree } exact path ="/EventThree" />
            <Route component={ EventFour } exact path ="/EventFour" />
            <Route component={ EventFive } exact path ="/EventFive" />
            <Route component={ EventSix } exact path ="/EventSix" />
            <Route component={ EventSeven } exact path ="/EventSeven" />
            <Route component={ EventEight } exact path ="/EventEight" />

    </Switch>
    )
}