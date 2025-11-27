const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const checkToken = require('../middleware/checkToken')

router.get('/:userId', async (req, res) => {
    try {
        const orders = await Order.findAll({
            where: {
                userId: req.params.userId
            }
        })
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

router.post('/', checkToken, async (req, res) => {
    const { userId, bookId, quantity } = req.body

    if (!userId || !bookId || !quantity) {
        return res.status(400).json({
            message: 'You must provide title, author and year'
        })
    }

    try {
        const result = await fetch(`http://127.0.0.1:3001/api/books/${bookId}`)
        if (result.status !== 200) {
            return res.status(400).json({
                message: 'Invalid bookId'
            })
        }

        const newOrder = await Order.create({
            userId: Number(userId),
            bookId: Number(bookId),
            quantity: Number(quantity)
        })
        res.status(200).json({
            message: 'Successfully added a new order',
            orderId: newOrder.id
        })
    }
    catch (err) {
        return res(500).json({
            message: 'Failed to add a new order',
            error: err.message
        })
    }
})

router.delete("/:orderId", checkToken, async (req, res) => {
    try {
        const deletedOrder = await Order.destroy({
            where: {
                id: req.params.orderId
            }
        })

        if (!deletedOrder) {
            return res.status(404).json({
                message: 'Order not found'
            })
        }

        res.status(200).json({
            message: 'Successfully deleted an order'
        })
    }
    catch (err) {
        return res.status(500).json({
            message: 'Failed to delete an order',
            error: err.message
        })
    }
})

router.patch("/:orderId", checkToken, async (req, res) => {
    const { userId, bookId, quantity } = req.body

    try {
        const current = await Order.findByPk(req.params.orderId)

        if (!current) {
            return res.status(404).json({
                message: 'Order not found'
            })
        }

        const book = await fetch(`http://127.0.0.1:3001/api/books/${bookId}`)
        if (book.status !== 200) {
            return res.status(400).json({
                message: 'Invalid bookId'
            })
        }

        await Order.update(
            {
                userId: userId ?? current.userId,
                bookId: bookId ?? current.bookId,
                quantity: quantity ?? current.quantity
            },
            {
                where: {
                    id: req.params.orderId
                }
            }
        )

        res.status(200).json({
            message: "Successfully updated order",
        })
    }
    catch (err) {
        return res.status(500).json({
            message: 'Failed to update an order',
            error: err.message
        })
    }
})
module.exports = router