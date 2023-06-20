require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");

require("./db/connection.js")
const Product = require("./models/productSchema.js")
const DefaultData = require('./defaultdata.js')
const cors = require("cors");

app.use(express.json());

app.use(cors());

const port =8005;
app.listen(port , ()=>{
    console.log("Server is runnning on the port " , port);
});

DefaultData();