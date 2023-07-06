require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");

require("./db/connection.js")
const cookieParser = require("cookie-parser");
const Product = require("./models/productSchema.js")
const DefaultData = require('./defaultdata.js')
const cors = require("cors");
const Router = require('./routes/index.js');

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());

app.use(Router);

const port = process.env.PORT || 8005;
app.listen(port , ()=>{
    console.log("Server is runnning on the port " , port);
});

DefaultData();