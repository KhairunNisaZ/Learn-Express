const express = require('express');
const router = express.Router();
const User = require('../models/userModels');

router.get('/', async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json({user: user})
    }catch (err) {
        res.status(500).json({message: err});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.find({_id: _id})
        res.status(200).json({user: user})
    }catch (err) {
        res.status(500).json({message: err});
    }
})
router.post('/', async (req, res) => {
    try {
        const { email, password } = await req.body

        //input validation
        if (!email || !password) {
            res.status(400).json({ error: 'Bad request. Missing required fields' })
        }

        const userData = {
            email,
            password,
        }
        const newUser = await User.create(userData)
        const savedUserData = await newUser.save()
        res.status(201).json({ message: 'User created successfully', user: savedUserData })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err })
    }
})

module.exports = router;