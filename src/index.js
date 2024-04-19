const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Database ket noi thanh cong')
}).catch((e) => {
    console.log(e)
})


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

routes(app);


app.get('/', (req, res) => {
    res.send('hello')
})


app. listen(port, ()=>{
    console.log('Server is running in port:', + port)
})