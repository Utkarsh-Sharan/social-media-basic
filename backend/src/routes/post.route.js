import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/post.controller.js";
import multer from "multer";

const router = Router();
const upload = multer({storage: multer.memoryStorage()});

router.route("/create-post").post(upload.single("image"), createPost);
router.route("/get-posts").get(getAllPosts);

export default router;