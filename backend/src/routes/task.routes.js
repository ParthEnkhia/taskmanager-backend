import express from "express";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, (req, res) => {
  res.status(200).json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

export default router;
