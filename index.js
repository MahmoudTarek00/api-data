const express = require('express')
const mydata=require('./task/data')
const app = express();

const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


const rout=require("./routt/router")
app.use(rout)
// Define your route handler for POST method
app.get("/",(req,res,next)=>{
    res.send("mahmoud")
})
  
// Define your 
// Start the server
const PORT = 3008; 
app.listen(PORT, () => {
    console.log("Server is runing Mahmoud");
});