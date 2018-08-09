const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl= require('./controller');
require('dotenv').config();

const session = require('express-session');
const bcrypt = require('bcrypt');
const numOfSaltRounds = 12;
const users = require('./users');
let id = 1;


const app = express();


//  //middleware
// const checkForSession = require('./middleware/checkForSession');
// console.log(checkForSession.sessionCheck() + '')

app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: true
}));

app.use( express.static( `${__dirname}/build` ) );

// //AUTH
// app.post( '/api/login', auth_controller.login );

app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected to db')
    app.set('db', database);   
}).catch(error => {
    console.log('There was an error connecting to db', db);
})

app.post('/login', ctrl.login)

// app.use( ctrl.sessionCheck);

app.post('/api/addcreateEvent',ctrl.createEvent)

app.get('/api/userEvents',ctrl.userEvents)

app.get('/api/eventInformationInventory',ctrl.read)

app.delete('/api/deleteEvent',ctrl.userEvents)



app.put('/api/eventInformationInventoryEdit', ( req, res ) => {
  console.log('----edit', req.body)
  let {user_id,  fullname, street, city, zip, phone, email, datetime, location, eventcomments} = req.body 
  req.app.get('db').update_event({
       user_id : user_id,
       fullname: fullname,
       street: street,
       city: city,
       zip: zip,
       phone: phone,
       email: email,
       datetime: datetime,
       location: location,
       eventcomments: eventcomments,
  
  }).then(eventinformation => {
      res.json(eventinformation);
  }).catch(error => {
      console.log(' there was an error on edit', error);
      req.statusCode(500).send('There was a issue on the server')
  })
})



app.delete('/api/eventInformationdelete/:id', (req, res) => {
  console.log('checking delete endpoint', req.params.id)
  let id = req.params.id;
  req.app.get('db').delete_event({
    id : id,
  }).then(eventinformation => {
    console.log('-------event',eventinformation)
      res.json(eventinformation);
  }).catch(error => {
      console.log('---error on the server', error)
  })
})

app.get('/userdata', ctrl.sessionCheck, (req, res) => {
      res.send(req.session.users)
})


const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

//BCrypt


// module.exports = {

    
    
    
    // register:
          app.post('/register', (req, res) => {
            console.log(req.body)
            const { fullname, email, password } = req.body;
          //bcrypt.hash is what hashes the password. This needs to be done before inserting into the database.
            bcrypt.hash( password, numOfSaltRounds ).then( hashedPassword => {
              console.log(hashedPassword)
          //create user sql file will be an insert statemetent with a RETURNING * at the end
              req.app.get('db').create_user([fullname, email, hashedPassword]).then(users => {/* instead of using {} in the create user, use [] because {} assumes 1 item */
                console.log('users!',users)
                req.session.user = users;
                res.status(200).send(req.session.users)
              }).catch(err => {
                console.log('Login 2',err);
                res.status(200).send({error: 'Something went wrong, please try a different username or try again.'})
              })
            })
          }),
    
    // logout: 
    
    app.post('/logout', (req, res) => {
        req.session.destroy();
        res.status(200).send();
      })
    
// }
//login button and input
//already a user log in here.

const PORT = 4000;
app.listen(PORT, () => {console.log(`server is up and running ${PORT}`)});



