const router = require('express').Router()

const Order = require('./order-model')

// get all orders

router.get('/get', (req, res) => {
    Order.find()
    .then(order => {
        if(order) {
        res.status(200).json({
            message: 'Order was found'
        })
    } else {
        res.status(404).json({
            message: 'Could not find any orders '
        })
    }
    })
    .catch(err => {
        res.status(500).json({
            error: 'error fetching order', err
        })
    })

})

// add an order

router.post('/make', (req, res) => {
    Order.insert(req.body)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(err => {
        res.status(500).json({
            error: 'error adding the order', err
        })
    })

})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    Order.findById(id)
    .then(order => {
        if(order) {
            Order.update(changes, id)
            .then(updatedOrder => {
                res.json(updatedOrder)
            })
        } else {
            res.status(404).json({
                message: 'Could not find order with given id'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to update Order', err
        })
    })
})

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params

    Order.remove(id)
    .then(del => {
        if(del) {
            res.status(200).json({
                message: `deleted order ${id}`, del
            })
        } else {
            res.status(404).json({
                message: 'this order does not exist'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error: 'Failed to delete order from database', err
        })
    })
})

module.exports = router