import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";
import multer from "multer";

const router = Router();
const upload = multer({storage: multer.memoryStorage()});

router.route("/create-post").post(upload.single("image"), createPost);

export default router;