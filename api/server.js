const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const orderRouter = require('../order-router')
const messageRouter = require('../sendMessage')

const server = express()

server.use(express.urlencoded({extended: false}))
server.use(express.json())
server.use(helmet())
server.use(cors())
// Routes
server.use('/api/order', orderRouter)
server.use('/api', messageRouter)

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
})

server.get('/',(req, res) => {
    res.status(200).json({
        api: "If your seeing this, I am a working api"
    })
})

module.exports = server