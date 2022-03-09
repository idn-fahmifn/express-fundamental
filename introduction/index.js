// import module express
const express = require('express')
// default port server
const port = 3000

// create express app
const app = express()

// create routing / bisa menggunakan express middleware
app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(port)