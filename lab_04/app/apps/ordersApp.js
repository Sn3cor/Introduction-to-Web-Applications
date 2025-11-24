const express = require('express')
const routes = require('../routes/ordersRoutes')

const app = express();

app.use("/api/orders", routes)

module.exports = app