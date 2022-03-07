const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
let jsonData = require('./pokedex.json')

app.use(cors())

app.get('/pokemon', (req, res) => {
  res.send(jsonData)
})

app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id
    res.send(jsonData[id-1])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})