let a = document.querySelector("button")
const Quote = require('inspirational-quotes');
a.addEventListener("click",()=>{
    document.textContent = Quote.getRandomQuote()
})

// console.log(Quote.getRandomQuote())