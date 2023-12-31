const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "thisismyjwtsecretkey"

// ROUTE:1 Create a user using POST "/api/auth/createuser", No login is required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    let success = false
    //If there are errors, return Bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    // Check whether the user with the same email exits
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success, error: "Sorry, user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        });
        const data = {
            user: {
                id: user.id
            }
        }
        success = true
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({ success, authtoken })


        // res.json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server error' });
    }
});


// ROUTE:2 Authenticate a user using POST "/api/auth/login", No login is required
router.post('/login', [
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Password cant be blank").exists()

], async (req, res) => {
    let success = false
    //If there are errors , return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            success = false
            return res.status(400).json({ error: 'Incorrect credentials ,try again' })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: 'Incorrect credentials ,try again' })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        success = true
        res.json({ success, authtoken })


    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server error' });
    }

})

// ROUTE:3 Get loggedin user details using POST "/api/auth/getuser", Login is required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server error' });
    }
})







module.exports = router;