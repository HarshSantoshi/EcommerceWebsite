const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>console.log("Database Connected Successfully")).catch((error)=>console.log("Error :",error.message));