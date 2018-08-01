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









//BCrypt


module.exports = {

    login: 
        app.post('/login', (req, res) => {
            const { username, password } = req.body;
            app.get('db').find_users([username]).then(users => { 
              if(user.length){
                console.log(users)
                const {id, name, email } = users[0];
          // Use bcrypt.compare to compare the entered password with the hashed password.
                bcrypt.compare(password, users[0].password).then(passwordMatch => {
                  if(passwordMatch){
                    req.session.users = { id, name ,email, }
                    res.status(200).send( req.session.users )
                  } else {
                    res.send({error: 'Wrong Username or Password'})
                  }
                }).catch(err => console.log('Login 1', err))
              } else {
                res.send({error: 'No User Found'})
              }
            }).catch(() => res.status(403).send({error: 'Something went wrong. Please try again.'}))
          }),
    
    
    
    register:
          app.post('/register', (req, res) => {
            const { name, email, password } = req.body;
          //bcrypt.hash is what hashes the password. This needs to be done before inserting into the database.
            bcrypt.hash( password, saltRounds ).then( hashedPassword => {
          //create user sql file will be an insert statemetent with a RETURNING * at the end
              app.get('db').create_user({name, email, hashedPassword}).then(users => {
                req.session.user = users;
                res.status(200).send(req.session.users)
              }).catch(err => {
                console.log('Login 2',err);
                res.status(200).send({error: 'Something went wrong, please try a different username or try again.'})
              })
            })
          }),
    
    logout: 
    
    app.post('/logout', (req, res) => {
        req.session.destroy();
        res.status(200).send();
      })
    
}































const PORT = 4000;
app.listen(PORT, () => {console.log(`server is up and running ${PORT}`)});



