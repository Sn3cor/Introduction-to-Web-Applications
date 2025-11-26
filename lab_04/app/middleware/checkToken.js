const jwt = require('jsonwebtoken')
require('dotenv').config()

const checkToken = (req, res, next) => {
    const header = req.headers['authorization']

    if (!header) {
        return res.status(401).json({
            message: 'No token.'
        })
    }

    const bearer = header.split(' ')
    const token = bearer[1]

    try {
        const decodedUser = jwt.verify(token, process.env.SECRET)
        req.user = decodedUser
        next()
    }
    catch (err) {
        return res.status(403).json({
            message: 'Invalid token.'
        })
    }
}

module.exports = checkToken