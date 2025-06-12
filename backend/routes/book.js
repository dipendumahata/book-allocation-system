import express from "express";
import { getBooks, addBook, updateBook, deleteBook } from "../controllers/bookController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();
import { body } from "express-validator";

router.get("/", authMiddleware, getBooks);

router.post("/",authMiddleware,
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("author").notEmpty().withMessage("Author is required"),
  ],
  addBook
);

router.put("/:id",authMiddleware,
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("author").notEmpty().withMessage("Author is required"),
  ],
  updateBook
);

router.delete("/:id", authMiddleware, deleteBook);

export default router;