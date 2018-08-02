let id =0;
let eventinformation = []

module.exports = {

//do i have to Create for each table listed on sql or the init file?

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
    res.status(200).send(eventinformation)

},

update: (req, res) => {
    const{ user_id,fullname, street, city, zip, phone, email, datetime, location, eventcomments}=req.body;
    const eventinformationId = req.params.id
    const eventinformationIndex = eventinformation.findIndex( eventinformation => eventinformation.id == eventinformationId)
    let eventinformation = eventinformation[eventinformationIndex];

    eventinformation[ eventinformationIndex ] = {
        user_id: user_id || eventinformation.user_id,
        fullname: fullname || eventinformation.fullname,
        street: street || eventinformation.street,
        city: city || eventinformation.city,
        zip: zip || eventinformation.zip,
        phone: phone || eventinformation.phone,
        email: email || eventinformation.email,
        datetime: datetime || eventinformation.datetime,
        location: location || eventinformation.location,
        eventcomments: eventcomments || eventinformation.eventcomments,
    }
    req.app.get('db').update_event

    res.status(200).send(eventinformation);
},



delete: (req, res) => {
    const eventinformationId = req.params.id;
    eventinformationIndex = eventinformation.findIndex(eventinformation => eventinformationId == eventinformationId);
    eventinformation.splice(eventinformationIndex,1);
    req.status(200).send(eventinformation);




}

}




//create accounts
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