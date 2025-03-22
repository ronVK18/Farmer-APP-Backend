const express=require('express');
const app=express();
const db=require('./db/db');
const cors=require('cors');
require('dotenv').config();
const bodyParser=require('body-parser');   
