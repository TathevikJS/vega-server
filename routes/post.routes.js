const { Router, request } = require('express')
const config = require('config')
const path = require('path')
const Post = require('../models/Post')
const router = Router()
const multer = require('multer')
const fs = require('fs')


//define storAGE FOR THE IMAGES
const folderPath = './public/uploads/images/'

// const storage = multer.diskStorage({
//     destination:  (req, file, callback ) => {
//         if (!fs.existsSync(`${folderPath}${req.body.title}`)) {
//             fs.mkdirSync(`${folderPath}${req.body.title}`)
//             fs.mkdirSync(folderPath + req.body.title + '/multi')
//           }
//         if(file.fieldname === 'image' || file.fieldname === 'croppedImage'){
//             callback(null, folderPath + req.body.title)
//         } 
//         else if(file.fieldname === 'multipleImage') {
//             callback(null, folderPath + req.body.title + '/multi')
//         }
//     },

//     //add back the extension
//     filename: (req, file, callback) => {
//         // let pathExt = path.extname(file.originalname)
//         callback(null, Date.now() + file.originalname)
//     }
// }) 

//  const upload = multer({
//     storage: storage
// })

router.post('/api/posts/create', async (req, res) => {
    try {
        // Process and save the post data
        // Replace this with your actual logic to create a post
        const newPost = req.body; // Example: Create a new post based on the request body
        // Save the post to the database
        // 
        await newPost.save();
        res.status(201).json({ message: 'Post created successfully', posts: newPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

router.get('/api/posts', async (req, res) => {
    try {
        console.log(res);
        // Replace 'Post' with your actual Mongoose model
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});



// router.delete('/del/:id', async(req,res)=>{
//     const id = req.params.id;
//     console.log(id);
//     try{
//         const data = await Link.findById(id)
//         console.log(data);
//         if(data){
//             console.log(data);
//             const post = await Link.findOneAndDelete(id)
//             res.send(post);
//             return;
//         }
//         res.status(400).send({error: "You don't have access to this post!!!"})
//     } catch{
//         res.status(400).send({error: "Something went wrong"})
//     }
// })



// router.patch('/update/:id', async (req, res) => {
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


// router.get('/:id',async(req,res)=>{
//     const id = req.params.id
//     try {
//         const data = await Link.findById(id)
//         res.send(data)
//     } catch (error) {
//         res.status(400).send({error: "Something went wrong"})
//     }
// }) 


/// get image using url !!

// imageDir = process.cwd() + "/public/uploads/images/",
// router.get("/images/:folder/:image/", function (request, response) {
//     console.log(request.params);
//     const path = imageDir + request.params.folder + '/' + request.params.image;
//     response.sendFile(path);
// });

// router.get("/images/:folder/:croppedImage/", function (request, response) {
//     const path = imageDir + request.params.folder + '/croppedImage/' + request.params.croppedImage;
//     console.log(path, 'fdgfh');
//     response.sendFile(path);
// });

// router.get("/images/:folder/multi/:image", function (request, response) {
//     console.log(request.params);
//     const path = imageDir + request.params.folder + '/multi/' + request.params.image;
//     response.sendFile(path);
// });


module.exports = router






/*
router.post('/:id', async (req, res) => {
    try {
        const link = await Link.findById(req.params.id)
        res.json(link)
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong' })
    }
})
*/