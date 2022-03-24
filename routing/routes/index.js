const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

// route index dengan method GET

router.get("/", (req, res, next) => {
    res.send('Ini halaman index')
})

// route index method post
router.post(
    "/", 
    bodyParser.json(),
    bodyParser.urlencoded({
        extended: true
    }),
    (req, res, next) => {
        res.send(req.body)
    }   
)

// route index method delete

router.delete("/:id", (req, res, next) => {
    res.send(`Data dengan id ${req.params.id} Berhasil dihapus`)
})

router.delete("/", (req, res, next) => {
    res.send(`Tidak dapat menghapus, karena anda belum memasukan ID`)
})

module.exports = router