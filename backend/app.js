const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv/config');
const authJwt = require('./helper/jwt');
const errorHandler = require('./helper/error-handler');

app.use(cors());
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(authJwt());
// to see the img in the browser
app.use('/public/uploads', express.static(__dirname+'/public/uploads'));
// errorhandling
app.use(errorHandler);

//Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const aws = require('aws-sdk');

const api = process.env.API_URL;
const uri = process.env.MONGODB_URI;

let s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
});

app.use(`${api}/users`, usersRoutes);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/orders`, ordersRoutes);

//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    keepAlive: true,
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
    dbName: "eshop-database",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

//Server Development
/*app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
}); */

//Server Production

var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
})
