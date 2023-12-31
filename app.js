const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const { Router, request } = require('express')
const path = require('path')
const Post = require('./models/Post')
const router = Router()
const fs = require('fs');

app.use(cors({
    origin: '*',
    methods: 'GET, POST, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(connect => console.log('connected to mongodb..'))
.catch(e => console.log('could not connect to mongodb', e));

// Set EJS as templating engine (if needed)
app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;

// Define a route for getting posts
app.get('/api/posts', async (req, res) => {
    try {
        // Replace 'Post' with your actual Mongoose model
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// Define a route for creating a post
app.post('/api/posts/create', async (req, res) => {
    console.log(req.body, 'REQREQRE');
    try {
        const newPost = new Post({
            title: req.body.title,
        });
        await newPost.save();
        res.status(201).json({ post: newPost });
        console.log('saved');
    } catch (error) {
        console.error(error);
        res.status(500).json(error, { message: 'Something went wrong' });
    }
});

// app.patch('/update/:id', async (req, res) => {
//     console.log(req.body, 'REQREQRE');
//     const postData = { ...req.body }
//     const data = await Link.findById(req.params.id)
//     if (data) {
//         console.log(postData, 'POSTSTSTS');
//          const updated =  await Link.updateOne({ _id: req.params.id }, { 
//             ...postData,
//             title: postData.title,
//         }, (err, res) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//         return res.send(updated)
//     }
//     else{
//         res.send("<h1>error</h1>")
//     }
// })


app.get('/api/posts/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const data = await Post.findById(id);
        console.log(data);
        if (!data) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(data); // 
    } catch (error) {
        res.status(400).json({ error: "Something went wrong" }); // Return JSON error response
    }
});


app.delete('/api/posts/del/:id', async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    try{
        const data = await Post.findById(id)
        console.log(data);
        if (!data) {
            return res.status(404).json({ error: 'Post not found' });
        }
        if(data){
            console.log(data);
            const post = await Post.findOneAndDelete(id)
            res.send(post);
            return;
        }
        res.status(400).send({error: "You don't have access to this post!!!"})
    } catch{
        res.status(400).send({error: "Something went wrong"})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
