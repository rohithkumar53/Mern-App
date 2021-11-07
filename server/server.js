const express= require('express');
//create express app
const app=express();
const cors= require("cors");
const path = require("path");
require('dotenv').config();

app.use(express.json());
app.use(cors());
const PORT= process.env.PORT || 8080;

const connect = require("./database/connection");

//database connection
connect();

//routes
app.use('/api', require('./router/router'));

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../build", "index.html")));
    })
}

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
