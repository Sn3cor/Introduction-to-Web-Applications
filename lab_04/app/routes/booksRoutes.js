const express = require('express')
const router = express.Router()
const Book = require('../models/Book')
const checkToken = require('../middleware/checkToken')

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



router.post('/', checkToken, async (req, res) => {
    const { title, author, year } = req.body

    if (!title || !author || !year) {
        return res.status(400).json({
            message: 'You must provide title, author and year'
        })
    }

    try {
        const newBook = Book.create({ title: title, author: author, year: Number(year) })
        res.status(200).json({
            message: 'Successfully added a new book',
            book: newBook
        })
    }
    catch (err) {
        return res(400).json({
            message: 'Failed to add a new book'
        })
    }

})

router.delete('/:bookId', checkToken, async (req, res) => {
    try {
        const deletedBook = await Book.destroy({
            where: {
                id: req.params.bookId
            }
        })

        if (!deletedBook) {
            return res.status(404).json({
                message: 'Book not found'
            })
        }

        res.status(200).json({
            message: 'Successfully deleted a book'
        })
    }
    catch (err) {
        return res.status(400).json({
            message: 'Failed to delete a book'
        })
    }
})

module.exports = router