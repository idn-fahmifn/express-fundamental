// const express = require("express");
// const app = express();

// // app.enable("case sensitive routing");

// app.get("/home", (req, res) => {
//     res.send('Konfigurasi dengan in app configuration')
// })

// app.listen(3000)


// import dotenv
require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // buat kondisi ketika kita jalankan 5000 makan portnya ada di production, else berati di development

    let status = process.env.PORT == 5000? "Production" : "Development"
    res.send(`Hello ! anda masuk sebagai : ${status} App`);
});

app.listen(process.env.PORT, function(){
    console.log(`Anda menggunakan port : ${process.env.PORT}`)
});