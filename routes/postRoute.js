const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const auth = require("../middleware/auth");

const router = express.Router();

// CREATE POST
router.post('/', auth, async (req, res) => {
    try {
        const {textOfThePost} = req.body;

        const user = await User.findById(req.user._id);
        if(!user) {
            res.status(404).json("User not found.");
        }

        const newPost = new Post({
            textOfThePost,
            username : user.username,
            user : req.user._id
        });

        await newPost.save();

        res.status(200).json("Post is created, congratulations!");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// GET ALL POSTS
router.get('/all_posts', async (req, res) => {
    try {
        const allPosts = await Post.find();

        res.status(200).json(allPosts);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// GET LATEST POST BY USING DATE
router.get('/most_recent_post', async (req, res) => {
    try {
       const mostRecentPost = await Post.find().sort({date : -1});
       
       res.status(200).json(mostRecentPost);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// GET SINGLE POST
router.get('/:id', async (req, res) => {
    try {
        const singlePost = await Post.findById(req.params.id);

        res.status(200).json(singlePost);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// GET AUTHENTICATED POSTS
router.get('/authenticated_posts', auth, async (req, res) => {
    try {
        const posts = await Post.find();

        const authenticatedPosts = posts.filter((post) => post.user.toString() === req.user._id.toString());

        res.status(400).json(authenticatedPosts);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// REMOVE POST
router.delete('/delete_post/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            res.status(400).json("Post not exist.");
        }

        if(post.user.toString() !== req.user._id.toString()) {
            res.status(400).json("Authentication error");
        }

        await post.remove();

        res.status(200).json("Post successfully deleted.");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// REMOVE LIKE FROM POST
router.delete('/remove_like_from_post/:pid:lid', auth, async (req, res) => {
    try {
        const selectedPost = await Post.findById(req.params.pid);

        const removeLikeFromPost = selectedPost.likes.filter((like) => like._id.toString() !== req.params.lid.toString());

        selectedPost.likes = removeLikeFromPost;

        await selectedPost.save();

        res.status(200).json(selectedPost);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// LIKE POST
router.put('/likes/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            res.status(404).json("Post does not exist.");
        }

        if(post.likes.find((like) => like.user.toString() === req.user._id)) {
            res.status(401).json("This post is already liked by you.");
        }

        const newLike = {
            user : req.user._id
        }

        post.likes.unshift(newLike);

        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// MOST LIKED POST
router.get('/most_liked', async (req, res) => {
    try {
        // by default sort is assign to 1 when we use -1 it basically reverse the array
        const mostLikedPost = await Post.find().sort({likes : -1});

        res.status(200).json(mostLikedPost);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// COMMENT ON POST
router.put('/comments/:id', auth, async (req, res) => {
    try {
        const {textOfTheComment} = req.body;

        const user = await User.findById(req.user._id);
        if(!user) {
            res.status(404).json("User does not exist.");
        }

        const post = await Post.findById(req.params.id);
        if(!post) {
            res.status(404).json("Post does not exist.");
        }

        const newComment = {
            textOfTheComment,
            username : user.username
        }

        post.comments.unshift(newComment);

        await post.save();

        res.status(200).json("Comment added.");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// MOST COMMENTED POSTS
router.get('/most_commented_post', async (req, res) => {
    try {
        const mostCommentedPost = await Post.find().sort({comments : -1});

        res.status(200).json(mostCommentedPost);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// LIKE ON COMMENT
router.put('/like_comment/:pid/:cid', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.pid);
        if(!post) {
            res.status(404).json("Post does not exist.");
        }

        const commentFromPost = (post.comments.find((comment) => comment._id.toString() === req.params.cid.toString()));
            
        if(!commentFromPost) {
            res.status(404).json("Comment not found");
        }

        const newLike = {
            user: req.user._id
        };
      
        commentFromPost.likes.unshift(newLike);
      
        await post.save();
      
        res.json("Comment is liked");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = router;