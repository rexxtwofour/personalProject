

module.exports = {
sessionCheck: ( req, res, next ) => {
    if (req) {
      return next();
    } else {
     res.json({ message: 'You are not authorized' });
    }
  }
}

// app.get('db', (req, res) => {
//     res.json({ user_id: $1 });
//   });
  

//check everything that was added
//user id from db
//put user id into session
//then jump into the Q

// {
//     const { session } = req;

//     if ( !session.user ) {
//         session.user ={ user_id: $(1), username: '', userEvents: [] };
//     }
//     next();
// };
