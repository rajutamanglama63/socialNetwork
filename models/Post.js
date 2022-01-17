const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    username : {
        type : String
    },
    textOfThePost : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    },
    likes : [
        {
            user : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "user"
            },
        }
    ],
    comments : [
        {
            user : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "user"
            },
            username : {
                type : String,
                required : true
            },
            date : {
                type : Date,
                default : Date.now()
            },
            textOfTheComment : {
                type : String
            },
            likes : [
                {
                    user : {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : "user"
                    }
                }
            ]
        }
    ]
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;