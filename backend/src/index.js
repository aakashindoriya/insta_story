require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connect=require("./utils/dbConnect")
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/stories', (req, res) => {
    
  });



app.listen(port,()=>{
    connect()
    console.log(`server is running on port ${port} `)
})