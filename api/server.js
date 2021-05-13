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

const corsOptions = {
    origin: "*"
}

server.use('/api/order', orderRouter)
server.use('/api', messageRouter)

server.get('/', cors(corsOptions),(req, res) => {
    res.status(200).json({
        api: "If your seeing this, I am a working api"
    })
})

module.exports = server