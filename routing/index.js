require("dotenv").config();
const express = require('express')
const app = express()
const indexRoute = require("./routes/index")
const userRoute = require("./routes/user")


// disini untuk routing
app.use("/", indexRoute)
app.use("/user", userRoute)



app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port ${process.env.PORT}`)
})