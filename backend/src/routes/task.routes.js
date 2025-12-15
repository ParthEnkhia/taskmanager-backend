import express from "express";
import protect from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validators/task.validator.js";
import {
  createTask,
  getMyTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", protect, validate(createTaskSchema), createTask);
router.get("/", protect, getMyTasks);
router.put("/:id", protect, validate(updateTaskSchema), updateTask);
router.delete("/:id", protect, deleteTask);

export default router;
