const express = require('express');
const Education = require('../models/Education');
const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.post('/add', auth, async (req, res) => {
    try {
        const {school, degree, year} = req.body;

        const user = await User.findById(req.user._id);
        if(!user) {
            res.status(404).json("User does not exist.");
        }

        const education = new Education({
            school,
            degree,
            year,
            username : user.username,
            user : req.user._id
        });

        await education.save();

        res.status(200).json(education);
    } catch (error) {
        console.log(error);
        res.status(400).json('server error...')
    }
});

router.get('/render_edu', auth, async (req, res) => {
    try {
        const educationData = await Education.find();

        const filteredEdu = educationData.filter((eduData) => eduData.username === req.user.username);

        res.status(200).json(filteredEdu);
    } catch (error) {
        console.log(error);
        res.status(400).json('server error...')
    }
})

module.exports = router;