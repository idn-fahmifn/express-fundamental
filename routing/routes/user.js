const users = [
    {
        id:1,
        nama : "fawaz",
        kelas : "10 TKRO 1"
    },
    {
        id:2,
        nama : "abdul",
        kelas : "10 TKJ 3"
    },
    {
        id:3,
        nama : "michael",
        kelas : "10 TBSM 2"
    }
]


const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

router.get("/user", (req, res, next)=> {
    res.send({users})
}) 



module.exports = router
