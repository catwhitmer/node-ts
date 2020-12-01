import { createTodo, getTodos } from "../controllers/todos";

import { Router } from "express";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id");

router.delete("/:id");

export default router;
