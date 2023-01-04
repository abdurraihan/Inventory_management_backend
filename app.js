const express = require("express");
const app = express();
const cors = require("cors");

const { red } = require("colors");


//middleware 
app.use(express.json());
app.use(cors());

// router 
const productRouter = require('./routes/products.route.js');
const brandRouter = require('./routes/brand.route.js');

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// posting to database 

app.use('/api/v1/product',productRouter);
app.use('/api/v1/brand', brandRouter);


module.exports = app;