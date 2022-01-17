const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
const User = require("../models/User");

dotenv.config();

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const {username, password, email} = req.body;

        if(!username || !password || !email) {
            res.status(400).json("All field required!");
        }

        if(password.length < 5) {
            res.status(400).json("Password must be 5 character long.")
        }

        const user = await User.findOne({email : email});
        if(user) {
            res.status(400).json("User already exist!");
        };

        const salt = await bcrypt.genSalt(10);

        const hassedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password : hassedPassword,
            email
        });

        await newUser.save();

        // signing jwt token for authentication
        const token = createToken({_id : newUser._id, email : newUser.email, username : newUser.username, role : newUser.role});

        res.status(200).send(token);
    } catch (error) {
        console.log(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            res.status(400).json("All fields are required!");
        }
        
        const user = await User.findOne({email : email});
        if(!user) {
            res.status(400).json("User doesnot exist!");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            res.status(400).json("Invalid credentials");
        }

        const token = createToken({_id : user._id, email : user.email, username : user.username, role : user.role})

        res.status(200).send(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error.message});
    }
})

const createToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {expiresIn : "1d"});
}

module.exports = router;