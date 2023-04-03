const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const { findById } = require("../models/User");

// Adding Posts ...
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        res.status(500).json(err);
        // console.log("error is coming");
    }
});

// Updating Posts ...
router.put("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username)
        {
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set: req.body,
                },{ new:true });
                res.status(200).json(updatedPost);
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json("You can Update only your Posts");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
});
// Delete Post ...
router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username)
        {
            try{
                await post.delete();
                res.status(200).json("Post has been deleted");
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json("You can Delete only your Posts");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
});
//Getting User from Database
router.get('/:id', async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json("Post not found in database");
    }
})
//Display All Posts
router.get('/', async(req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({ username:username});
        }
        else if(catName){
            posts = await Post.find({ categories:{
                $in:[catName] // this here checks if catName is present in the array of categories (in method)
            }})
        }
        else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json("Post not found in database");
    }
})

module.exports = router;