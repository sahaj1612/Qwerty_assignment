const express = require('express')
const app = express()
const port = 8080

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})

const Quote = require('inspirational-quotes');
const path = require("path")

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs") 

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("main.ejs",{quote:null})
})

app.post("/",(req,res)=>{
    let quote = Quote.getRandomQuote();
    res.render("main.ejs",{quote})
})