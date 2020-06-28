const express = require('express');
const router = express.Router();
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/User');
const auth = require('../middleware/auth');
const generateToken = require('../helpers/generateToken');
const SECRET_KEY = 'SECRET_KEY';

router.post('/signup', [
    check('name', "Please Enter a Valid Username")
        .not()
        .isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check("password", "Please enter a valid password").isLength({
        min: 6
    })
], async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            name,
            email,
            password
        } = req.body;

        let user = await User.findOne({
            email
        })

        if (user) {
            return res.status(400).json({
                message: 'User already exist'
            })
        }

        user = new User({
            name,
            email,
            password
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const token = await generateToken({user : { id: user.id }}, SECRET_KEY, 10000);

        res.status(200).json({
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

router.post('/signin', [
    check('email', 'Please enter valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({
        min: 6
    })
], async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            email,
            password
        } = req.body;

        let user = await User.findOne({
            email
        });

        if (!user) {
            res.status(400).json({
                message: 'User Not Exist'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect Password !"
            });
        }

        const token = await generateToken({user : { id: user.id }}, SECRET_KEY, '5sec');

        res.status(200).json({
            token
        })
    } catch (e) {
        res.status(500).json({
            message: e
        })
    }
})

router.get('/get-user', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        res.json({
            user
        });
    } catch (e) {
        res.status(500).json({
            message: "Auth error"
        });
    }
})

module.exports = router;

