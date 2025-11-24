const express = require('express')
const routes = require('../routes/booksRoutes')

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/books", routes)


module.exports = app
