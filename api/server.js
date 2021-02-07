const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const orderRouter = require('../order-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('api/order')

server.get('/', (req, res) => {
    res.status(200).json({
        api: "If your seeing this, I am a working api"
    })
})

module.exports = server