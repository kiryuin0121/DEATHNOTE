import { Router } from "express";
import {
  createPerson,
  getPerson,
  getPersons,
} from "../controllers/personController";

const router = Router();

router.get("/", getPersons);
router.get("/:id", getPerson);
router.post("/", createPerson);

export default router;
