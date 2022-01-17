const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const auth = async (req, res, next) => {
    const token = req.header("x-auth-token");
    if(!token) {
        res.status(400).json("Authentication error. Access denied!");
    }
    try {

        // const decodedPayload =  await jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        //     if(err) res.status(400).json("Authentication error. Access denied!");

        const decodedPayload = await jwt.verify(token, process.env.JWT_SECRET)
            
        req.user = decodedPayload;

        next();
       

    } catch (error) {
        res.status(400).send("Invalid auth token.");
    }
};

module.exports = auth;