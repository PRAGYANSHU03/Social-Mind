import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* Read */
router.get("/", verifyToken, getFeedPosts); //grab the user feed when on homepage
router.get("/:userId/posts", verifyToken, getUserPosts); 

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;