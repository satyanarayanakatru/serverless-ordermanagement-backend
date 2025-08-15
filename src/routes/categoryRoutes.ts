import { Router } from "express";
const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");

const router = Router();

router.get("/", getCategories);
router.post("/", createCategory);

export default router;
