import { uploadFile } from "../services/storage.service.js";
import {Post} from "../models/post.model.js";

const createPost = async (req, res) => {
    try {
        const result = await uploadFile(req.file.buffer);

        const post = await Post.create({
            image: result.url,
            caption: req.body.caption,
        });

        return res.status(201).json({
            post,
            message: "Post created Successfully!",
        });
    } catch (error) {
        console.error("Error creating a post!", error);
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        return res.status(200).json({
            posts,
            message: "Posts fetched successfully!",
        });
    } catch (error) {
        console.error("Error fetching posts!", error);
    }
}

export {
    createPost,
    getAllPosts,
}