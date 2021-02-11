const router = require('express').Router()
const accountSid = process.env.TWILIO_ACCOUNT_SID

const authToken = process.env.TWILIO_AUTH_TOKEN
const Twilio = require('twilio')
const client = new Twilio(accountSid, authToken)

router.post('/messages', (req, res) => {
    res.header('Content-Type', 'application/json')
    client.messages
        .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: req.body.to,
            body: "Your order is ready pick up at window"
        })
        .then(() => {
            res.send({
                message: "the message was sent"
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                error: "The message did not get sent!"
            })
        })
})

module.exports = router