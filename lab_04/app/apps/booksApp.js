const express = require('express')
const routes = require('../routes/booksRoutes')

const app = express();

app.use("/api/books", routes)
module.exports = app
