const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { red } = require("colors");


//middleware 
app.use(express.json());
app.use(cors());

// router 
const productRouter = require('./routes/products.route.js')


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// posting to database 

app.use('/api/v1/product',productRouter)



module.exports = app;