//might not need this file, everything was put into index server file until this is checked off as good




// const express = require('express');
// const bodyPaser = require('body-parser');
// const session = require('express-session');
// const massive = require('massive');
// const bcrypt = require('bcrypt');
// const numOfSaltRounds = 12;
// const users = require('./users');
// let id = 1;

// module.exports = {

// login: 
//     app.post('/login', (req, res) => {
//         const { username, password } = req.body;
//         app.get('db').find_user([username]).then(user => { 
//           if(user.length){
//             console.log(user)
//             const {id, name, email } = user[0];
//       // Use bcrypt.compare to compare the entered password with the hashed password.
//             bcrypt.compare(password, user[0].password).then(passwordMatch => {
//               if(passwordMatch){
//                 req.session.user = { id, name ,email, }
//                 res.status(200).send( req.session.user )
//               } else {
//                 res.send({error: 'Wrong Username or Password'})
//               }
//             }).catch(err => console.log('Login 1', err))
//           } else {
//             res.send({error: 'No User Found'})
//           }
//         }).catch(() => res.status(403).send({error: 'Something went wrong. Please try again.'}))
//       }),



// register:
//       app.post('/register', (req, res) => {
//         const { name, email, password } = req.body;
//       //bcrypt.hash is what hashes the password. This needs to be done before inserting into the database.
//         bcrypt.hash( password, saltRounds ).then( hashedPassword => {
//       //create user sql file will be an insert statemetent with a RETURNING * at the end
//           app.get('db').create_user({name, email, hashedPassword}).then(user => {
//             req.session.user = user;
//             res.status(200).send(req.session.user)
//           }).catch(err => {
//             console.log('Login 2',err);
//             res.status(200).send({error: 'Something went wrong, please try a different username or try again.'})
//           })
//         })
//       }),

// logout: 

// app.post('/logout', (req, res) => {
//     req.session.destroy();
//     res.status(200).send();
//   })













    // login: ( req, res, next ) => {
    //     const { session } = req;
    //     const { username,password } = req.body;

    //     //const user = users.find( user => user.username === username && user.password === password );

    //     if ( user ) {
    //         session.user.username = user.username;
    //         res.status(200).send(session.user);
    //     } else {
    //         res.status(500).send('Unauthorized.');
    //     }
    
    // },

    // register: ( req, res, next ) => {
    //     const { session } = req;
    //     const { username, password } = req.body;

    //     users.push({ id,username, password });
    //     id++;

    //     session.user.username = username;

    //     res.status(200).send( session.user );
    // },

    // signout: ( req, res, next  ) => {
    //     const { session } = req;
    //     session.destroy();
    //     res.status(200).send( req.session);
    // },

    // getUser: ( req, res, next ) => {
    //     const { session } = req;
    //     res.status(200).send( session.user );
    // },
}

