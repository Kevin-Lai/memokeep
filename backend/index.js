const express = require("express");
const app = express(); // invokes an instance of the 'express' class

const cors = require('cors');

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const notes = require('./routes/api/notes');

// connect the web app to mongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/notes', notes);

// if we go to "/" route, execute the callback function
// 2 parameters: path, callback
app.get("/", (req, res)=>{
    // callback has 2 parameters: request and response
    return res.send("Hi");
});

// open in localhost:5000 for dev
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server is running on ${port}`));