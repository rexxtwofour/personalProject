const users = require('./users');
let id = 1;

module.exports = {


    app.post('/loggedin', (req, res) => {
        const { username, password } = req.body;
        app.get('db').find_user([username]).then(user => { 
          if(user.length){
            console.log(user)
            const {id, name, email, username } = user[0];
      // Use bcrypt.compare to compare the entered password with the hashed password.
            bcrypt.compare(password, user[0].password).then(passwordMatch => {
              if(passwordMatch){
                req.session.user = { id, email, name, username }
                res.status(200).send( req.session.user )
              } else {
                res.send({error: 'Wrong Username or Password'})
              }
            }).catch(err => console.log('Login 1', err))
          } else {
            res.send({error: 'No User Found'})
          }
        }).catch(() => res.status(403).send({error: 'Something went wrong. Please try again.'}))
      })
      
      app.post('/register', (req, res) => {
        const { name, email, username, password } = req.body;
      //bcrypt.hash is what hashes the password. This needs to be done before inserting into the database.
        bcrypt.hash( password, saltRounds ).then( hashedPassword => {
      //create user sql file will be an insert statemetent with a RETURNING * at the end
          app.get('db').create_user({name, email, username, hashedPassword}).then(user => {
            req.session.user = user;
            res.status(200).send(req.session.user)
          }).catch(err => {
            console.log('Login 2',err);
            res.status(200).send({error: 'Something went wrong, please try a different username or try again.'})
          })
        })
      })















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

