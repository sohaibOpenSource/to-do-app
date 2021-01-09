const port = 3333

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const users = require('./user');

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use('/api/users', users);


server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
