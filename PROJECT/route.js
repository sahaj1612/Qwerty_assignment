const express = require("express")
const app = express()

const path = require("path")
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs") 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

const randomWords = require('random-words');
const WordPOS = require('wordpos');
const wordpos = new WordPOS();
const shuffle = require('shuffle-array');

app.listen(8080,()=>{
    console.log("connection successful")
})

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

let word,hint,n1,jumbled

app.get("/word", async (req, res) => {
  word = randomWords.generate()
  n1 = req.query.n1
  await wordpos.lookup(word, (results) => {
    hint = results[0].def
    res.render("index1.ejs",{word,hint,n1})
  });
});

app.post("/words",(req,res)=>{
  n1 = req.body.n1;
  res.render("index1.ejs",{word,hint,n1})
})

app.get("/number",(req,res)=>{
  const n1 = req.query.n1;
  const n2 = req.query.n2;
  res.render("index2.ejs",{n1,n2})
})

app.get("/jumble",(req,res)=>{
  word = randomWords.generate()
  jumbled = shuffle(word.split('')).join('');
  n1 = req.query.n1
  res.render("index3.ejs",{word,jumbled,n1})
})

app.post("/jumbled",(req,res)=>{
  n1 = req.body.n1;
  res.render("index3.ejs",{word,jumbled,n1})
})