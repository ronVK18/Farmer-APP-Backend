const express=require('express');
const app=express();
const db=require('./db/db');
const cors=require('cors');
require('dotenv').config();
const bodyParser=require('body-parser');   
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const farmerRoute=require('./routes/farmer');

app.use('/farmer',farmerRoute);
app.listen(6969,()=>{
    console.log("Server is running on 6969");
})
