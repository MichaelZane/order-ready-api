const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const orderRouter = require('../order-router')
const messageRouter = require('../sendMessage')

const server = express()

server.use(express.urlencoded({extended: false}))
server.use(express.json())
server.use(helmet())
//for CORS policy 
const corsOptions ={
    origin:"*",
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
server.use(cors(corsOptions));

// Routes
server.use('/api/order', orderRouter)
server.use('/api', messageRouter)

server.get('/',(req, res) => {
    res.status(200).json({
        api: "If your seeing this, I am a working api"
    })
})

module.exports = server