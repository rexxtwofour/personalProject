const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl= require('./controller');
require('dotenv').config();






//middleware
const checkForSession = require('./middlewares/checkForSession');


app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: true
}));
app.use( checkForSession );
app.use( express.static( `${__dirname}/build` ) );

//AUTH
app.post( '/api/login', auth_controller.login );







const app = express();
app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected to db')
    app.set('db', database);   
}).catch(error => {
    console.log('There was an error connecting to db', db);
})

app.post('/api/addcreateEvent',ctrl.createEvent)

// app.get('/api/userEvents',ctrl.userEvents)

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})














const PORT = 4000;
app.listen(PORT, () => {console.log(`server is up and running ${PORT}`)});



