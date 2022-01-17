const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');

const router = express.Router();

router.post('/create', auth, async (req, res) => {
    try {
        const {phone, address, mobile, aboutSelf, profession, dob} = req.body;

        const user = await User.findById(req.user._id);
        if(!user) {
            res.status(404).json("User does not exist.");
        }

        const profile = new Profile({
            phone,
            address,
            mobile,
            aboutSelf,
            dob,
            profession,
            username : user.username,
            user : req.user._id
        });

        await profile.save();

        res.status(200).json(profile);
    } catch (error) {
        console.log(error);
        res.status(500).json("Server error...")
    }
});

router.get('/render_profile', auth, async (req, res) => {
    try {
        const profileData = await Profile.find();

        const FilteredProfile = profileData.filter((profileDatum) => profileDatum.username === req.user.username);

        res.status(200).json(FilteredProfile);
    } catch (error) {
        console.log(error);
        res.status(500).json("Server error...");
    }
})

module.exports = router;