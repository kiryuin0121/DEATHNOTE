import { Router } from "express";
import {
  createSong,
  deleteSong,
  getSongs,
} from "../controllers/songController";

const router = Router();

router.get("/", getSongs);
router.post("/", createSong);
router.delete("/:id", deleteSong);
export default router;
