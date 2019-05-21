const express = require('express')
const app = express()
const bodyParser = require("body-parser")

const fileRoutes = require('./routes/file-upload')

const hostname = '127.0.0.1'
const port = 3000

app.use(express.static('public'))

app.use(bodyParser.json())

app.use('/', fileRoutes)

app.listen(port, () => {
  console.log(`Server is listening on http://${hostname}:${port}/`)
})
