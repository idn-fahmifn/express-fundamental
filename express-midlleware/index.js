require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const middleware1 = require("./middleware/headers");
const middleware2 = require("./middleware/body");

//pemanggilan middleware

// middleware pertama
app.use('/',bodyParser.json(), middleware1);

// middleware untuk method POST pada url /
app.post('/', bodyParser.urlencoded({extended:true}), middleware2);


app.listen(process.env.PORT, () => {
    console.log("server berjalan di port " + process.env.PORT);
})