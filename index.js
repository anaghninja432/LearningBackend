require('dotenv').config()
const express = require('express')//import express from 'express' can also be used
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!????')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>')

})

app.get('/youtube', (req, res) => {
    res.send('<h1>Youtube Page</h1>')

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})