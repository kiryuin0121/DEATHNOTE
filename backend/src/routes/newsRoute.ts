import { Router } from "express";
import { getPost, getPosts } from "../controllers/newsController";

const router = Router();
router.get("/", getPosts);
router.get("/:id", getPost);
export default router;
