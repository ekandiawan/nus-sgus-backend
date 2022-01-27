const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/fred', function (req, res) {
    res.send('Hello Fred')
  })

app.listen(8000)