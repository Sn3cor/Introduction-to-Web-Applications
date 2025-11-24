const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.get('/', async (req, res) => {
    try {
        const books = await Book.findAll();
        if (books.length === 0) {
            return res.status(404).json({
                message: "No books were found"
            })
            return
        }
        res.status(200).json({
            message: "Fetched all books",
            books: books
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to fetch from database",
            error: err.message
        })
    }
});

router.get("/:bookId", async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.bookId)
        if (!book) {
            return res.status(404).json({
                message: "No book with matching bookId was found"
            })

        }
        res.status(200).json({
            message: "Fetched a book with matching bookId",
            book: book
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to fetch from database",
            error: err.message
        })
    }
})

module.exports = router