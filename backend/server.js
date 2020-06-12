const express = require("express");
const cors = require("cors");
const mongoose =require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB connection established successfully");
})

app.use("/exercises",require("./Routes/exercises"));
app.use("/users",require("./Routes/users"));

app.listen(process.env.PORT || 1234,()=>{
    console.log("Server Start");
});