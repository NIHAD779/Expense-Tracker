const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path:"./config.env"});
const port = process.env.PORT||5000;

// mongodb connection
const con = require('./db/connection')

// use middleware

// using routes
app.use(require('./Routes/route'));

con.then(db =>{
    if(!db) return process.exit(1);
    app.listen(port,()=>{
        console.log(`server is running on port : ${port}`)
    })

    app.on('error',err => console.log(`Failed to connect to HTTP server : ${err}`))
}).catch(error =>{
    console.log(`connection Failed .. ! ${err}`)
})
