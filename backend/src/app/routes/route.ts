import { Router } from "express";
import { createTODO, deleteTODO, getAllTODOs, getTODO, updateTODO } from "../controllers/todo.controller";

const router = Router();

router.get("/todos", getAllTODOs);
router.get("/todo", getTODO);
router.post("/todo", createTODO);
router.put("/todo", updateTODO)
router.delete("/todo", deleteTODO)

export default router;
