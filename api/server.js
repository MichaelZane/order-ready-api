const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const orderRouter = require('../order-router')
const messageRouter = require('../sendMessage')

const server = express()

server.use(bodyParser.urlencoded({extended: false}))
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/order', orderRouter)
server.use('/api', messageRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        api: "If your seeing this, I am a working api"
    })
})

module.exports = server