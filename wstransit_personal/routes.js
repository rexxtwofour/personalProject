import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
import EventReviews from './components/EventReviews';
import PaymentSetup from './components/PaymentSetup';


export default (
    <Switch>
         Route component={ Home } exact path="/" />
        <Route component={ CreateAccount} path="/createaccount" />
        <Route component={ CreateEvent } path="/createvent" />
        <Route component={ Events } path="/events"/>
        <Route component={ EventReviews } path="/eventreviews" />
        <Route component={ PaymentSetup } path="/paymentsetup"/>


    </Switch>
)