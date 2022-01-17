const { text } = require('express');
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    username : {
        type : String,
    },
    projectTitle : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    }
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;