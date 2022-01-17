const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/usersRoute");
const postRoute = require("./routes/postRoute");
const profileRoute = require("./routes/profileRoute");
const educationRoute = require("./routes/educationRoute");
const projectRoute = require("./routes/projectRoute");

dotenv.config();

const app = express();

const Port = process.env.PORT || 4000;

connectDB();

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/profile', profileRoute);
app.use('/api/education', educationRoute);
app.use('/api/project', projectRoute);

app.listen(Port, () => {
    console.log(`Server running on port http://localhost:${Port}`);
});

