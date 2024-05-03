// console.log("chai or code")
const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send("hii this is me")
})

app.get('/login', (req,res) =>{
    res.send('<h1>your id is login</h1>')
})


app.get('/youtube',(req,res)=>{
    res.send('<h2>chai or code</h2>')
})
// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})