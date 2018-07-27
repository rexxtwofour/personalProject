import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateAccount from './components/Createaccount/CreateAccount';
import CreateEvent from './components/Createevent/CreateEvent';
import Events from './components/Events/Events';
import EventReviews from './components/Eventreviews/EventReviews';
import PaymentSetup from './components/Paymentsetup/PaymentSetup';
import Home from './components/Home/Home';
import SelectedEvents from './components/Selectedevent/SelectedEvent'


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


    </Switch>
    )
}