const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

router.get('/', async (req, res) => {
    try {
        const orders = await Order.findAll()
        if (orders.length === 0) {
            return res.status(404).json({
                message: "No orders were found"
            })
        }

        res.status(200).json({
            message: "Fetched all orders",
            orders: orders
        })

    } catch (err) {

        res.status(500).json({
            message: "Failed to fetch from database",
            error: err.message
        })
    }
})

module.exports = router