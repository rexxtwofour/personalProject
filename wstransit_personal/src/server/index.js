const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected to db')
    app.set('db', database);   
}).catch(error => {
    console.log('There was an error connecting to db', db);
})
































const PORT = 4000;
app.listen(PORT, () => {console.log(`server is up and running ${PORT}`)});