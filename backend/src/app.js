const express = require('express');
const multer = require('multer');
const uploadfile = require('./services/storage.service');
const postModel = require("./models/post.model")
const cors = require("cors")


const app = express();
app.use(cors())
app.use(express.json());

const upload = multer({ storage:multer.memoryStorage() })



app.post('/create-post', upload.single("image"), async (req, res) =>{

    console.log(req.body);
    console.log(req.file);

    const result = await uploadfile(req.file.buffer);
    

    const post = await postModel.create({
    Image: result.url,
    caption: req.body.caption
})
    return res.status(201).json({
        message:"post create successfully"
    })

} )


app.get('/posts', async (req, res)=>{

    const posts = await postModel.find()

    return res.status(200).json({
        message:"posts fatched successfully",
        posts: posts
    })
})



module.exports = app;