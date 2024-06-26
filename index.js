const express = require('express')
const createFile = require('./util.js')
const readFile = require('./readFile.js')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  createFile(req,res)
})

app.get('/files',(req,res)=>{
  readFile(req,res)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})