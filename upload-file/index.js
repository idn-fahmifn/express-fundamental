require("dotenv").config();
const { Router } = require("express");
const express = require("express")
const path = require("path")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// middleware untuk menentukan folder public
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

// Router
// middleware 404

app.use((req, res, next) => {
    res.status(404).send({
        message : "routing tidak ditemukan"
    })
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send({
        message : err.message,
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port ${process.env.PORT}`)
})