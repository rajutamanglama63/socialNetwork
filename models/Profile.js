const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    username : {
        type : String
    },
    phone : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    aboutSelf : {
        type : String,
        required : true
    },
    profession : {
        type : String,
        required : true
    },
    dob : {
        type : Number,
        required : true
    },
    education : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'education'
    },
    projects : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'project'
    }
});

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;