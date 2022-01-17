const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    username : {
        type : String
    },
    school : {
        type : String,
        required : true
    },
    degree : {
        type : String,
        required : true
    },
    year : {
        type : Number,
        required : true
    }
});

const Education = mongoose.model('education', educationSchema);

module.exports = Education;