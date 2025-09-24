import { Router } from "express";
import {
  createTrailer,
  getTrailer,
  getTrailers,
} from "../controllers/trailerController";
const router = Router();
router.get("/", getTrailers);
router.get("/:id", getTrailer);
router.post("/", createTrailer);
export default router;
