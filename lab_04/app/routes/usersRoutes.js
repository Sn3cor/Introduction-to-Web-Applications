const express = require('express')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const saltRounds = 10

const router = express.Router()
const User = require('../models/User')



router.post('/register', body("email").isEmail(), body("password").isLength({ min: 6 }), async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty() && errors.errors[0].param === 'email') {
        return res.status(400).json({ message: 'Invalid email. Try again.' })
    }

    if (!errors.isEmpty() && errors.errors[0].param === 'password') {
        return res.status(400).json({ message: 'Password must be longer than 6 characters.' })
    }

    try {
        const { email, password } = req.body

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                message: 'User with this email already exists.'
            });
        }
        const hash = await bcrypt.hash(password, saltRounds)
        const user = await User.create({ email: email, password: hash })

        res.status(200).json({
            message: "Succesfully created an account",
            id: user.id
        })
    }
    catch (err) {
        res.status(400).json({
            message: "Failed to register user",
            error: err.message
        })
    }

})

module.exports = router
