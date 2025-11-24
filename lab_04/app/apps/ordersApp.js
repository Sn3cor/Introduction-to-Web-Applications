const express = require('express')
const routes = require('../routes/ordersRoutes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/orders", routes)


module.exports = app