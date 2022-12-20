require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require("./routes/routes")

const app = express()
app.use(cors({
    origin: "*",
    preflightContinue: "false"
}))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/", routes)

mongoose.connect(process.env.MONGO_URI,(err) => {
    if(err){
        console.log(err);
        console.log("Server Crashed abruptly");
        return process.exit()
    }
    app.listen(process.env.PORT, () => {
        console.log(`Server runs on port ${process.env.PORT}...`);
    })
})
