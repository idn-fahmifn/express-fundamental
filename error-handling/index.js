require ("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

// isNumber untuk validasi bahwa request harus berupa angka.
const isNumber = require("is-number");

const app = express()

app.post(
    "/input",
    bodyParser.urlencoded({extended:true}),
    (req, res, next) => {
        const {a, b} = req.body;
        // jika yang diinputkan bukan sebuah angka, maka akan mengeluarkan pesan :
        if(!isNumber(a) || !isNumber(b)){
            next(new Error("a dan b harus berupa angka"))
        }

        const add = (a, b) => Number(a) + Number(b);
        const result = add(a, b)

        if(result % 10 === 0){
            next(new Error("hasil dari A + B adalah kelipatan dari 10"))
        }else{
            res.send({
                message: `Hasil dari A + B adalah ${result}`,
            });
        }
    }
);

// middleware not found
app.use((req, res, next)=>{
    res.status(404).send({
        message: "Halaman Tidak ditemukan"
    })
})

// jika hasilnya adalah modulus dari 10, maka akan mengeluarkan respon error:
app.use((err,req, res, next)=>{
    console.log(err.stack);
    res.status(500).send({
        message: "Terjadi masalah pada server"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di ${process.env.PORT}`)
})