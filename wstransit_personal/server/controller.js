const bcrypt = require('bcrypt');
let id =0;
let eventinformation = []

module.exports = {

    

//user events 
createEvent:  (req, res) => {
        console.log('creating here', req.body)
        const{ user_id, fullname , street, city, zip, phone, email, datetime, location,eventcomments}=req.body;
        req.app.get('db').create_event([ user_id, fullname, street, city, zip , phone,email, datetime, location, eventcomments])
        .then((response) => {
            console.log('this is for create event',response)
            res.status(200).json(response)
        } )
        .catch( error => {
            console.log(error)
            res.status(500).send({errorMessage: " there was a create event issue"});
        })


},

read:(req, res) => {
    // req.session.user.id 
    //.read_event(1)
    console.log('session',req.session)
    //added to read, needs to be checked

    /****************************** USE THE BELOW FUNCTION ONCE YOU HAVE SESSION ***************/
    // req.app.get('db').read_event([ user_id, fullname, street, city, zip , phone,email, datetime, location, eventcomments])
    //     .then((response) => {
    //     // console.log('session error',session)
    //     res.status(200).json(response)
    // })
    // .catch( error => {
    //     console.log(error)
    //     res.status(500).send({errorMessage: " there was a read issue"});
    // })
    /****************************** USE THE ABOVE FUNCTION ONCE YOU HAVE SESSION ***************/
},
//console.log all
update: (req, res) => {
    const{ user_id,fullname, street, city, zip, phone, email, datetime, location, eventcomments}=req.body;
    // console.log('update id',user_id)
    const eventinformationId = req.params.id
                    // const eventinformationIndex = eventinformation.findIndex( eventinformation => eventinformation.id == eventinformationId)
                    // let eventinformation = eventinformation[eventinformationIndex];
//console.log the object
//get rid of eventinfo for db instantance
    eventinformation= {
        user_id: user_id ,
        fullname: fullname ,
        street: street ,
        city: city ,
        zip: zip ,
        phone: phone ,
        email: email ,
        datetime: datetime ,
        location: location ,
        eventcomments: eventcomments ,
    }
    req.app.get('db').update_event(...eventinformation).then( response => {
        // console.log('checking eventinfomation object',eventinformation)
        // res.status(200).send(eventinformation);
        // 'send response

    })


   
},



delete: (req, res) => {
    const eventinformationId = req.params.id;
    eventinformationIndex = eventinformation.findIndex(eventinformation => eventinformationId == eventinformationId);
    eventinformation.splice(eventinformationIndex,1);
    req.status(200).send(eventinformation);




},
userEvents: (req, res) => {
    //putstuffhere
},
sessionCheck: (req, res, next) => {
    if (req.session.users) {
        console.log('sessionCheck', req.session.users)
      return next();
    } else {
        console.log('no user')
     res.json({ message: 'You are not authorized' });
    }
},

login: (req, res) => {
            const { fullname, password } = req.body;
            console.log('checking the username and password',fullname, password)
            req.app.get('db').find_login(fullname).then(users => { 
                console.log('1', users)
              if(users.length){
                console.log('2', users)
                const {id, fullname } = users[0];
                console.log(id, fullname)
          // Use bcrypt.compare to compare the entered password with the hashed password.
                bcrypt.compare(password, users[0].password).then(passwordMatch => {
                    console.log('3', passwordMatch)
                  if(passwordMatch){
                    req.session.users = { id, fullname ,password }
                    res.status(200).send( req.session.users )
                  } else {
                    res.send({error: 'Wrong Username or Password'})
                  }
                }).catch(err => console.log('Login 1', err))
              } else {
                res.send({error: 'No User Found'})
              }
            }).catch(() => res.status(403).send({error: 'Something went wrong. Please try again.'}))
          },
    

        }


// createUsersAccount :  (req, res) => {
//     console.log('ceating account', req.body)
//     const { fullname, email, password } = req.body;
//     req.app.get('db').create_users([ fullname, email, password ])
//     .then(() => req.sendStatus(200) )
//     .catch( error =>  {
//         res.status(500).send({errorMessage: "There was a create account issue"});
//     })


// },


// delete: (req, res) => {




// }




// createEventReview : (req, res) => {
//     console.log('creating event posts')
//     const { users_id, comment, likes, event_title, post_title } = req.body;
//     req.app.get('db').create_posts([ users_id, comment, likes, event_title, post_title ])
//     .then(() => req.sendStatus(200) )
//     .catch(error => {
//         res.status(500).send({errorMessage: "There was create posts issue"});
//     })

// }

// ]