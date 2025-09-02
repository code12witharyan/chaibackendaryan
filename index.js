console.log("chai or code")


require('dotenv').config()

const express = require('express')

// import express from 'express';

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



app.get('/twitter',(req,res)=>{
    res.send('This is my twitter handle https://twitter.com/viditjain2002')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login to continue</h1>') 
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get ('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
})