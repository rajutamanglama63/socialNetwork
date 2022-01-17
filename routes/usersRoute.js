const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth")

const router = express.Router();

router.get('/all_users', async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// user info
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;