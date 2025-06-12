import Book from "../models/Book.js";
import { validationResult } from "express-validator";

// Get all books with uploader info
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("uploadedBy", "username");
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Add a new book
export const addBook = async (req, res) => {
  // Input validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author, uploadedBy: req.user.id });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  // Input validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to update this book" });
    }

    book.title = req.body.title;
    book.author = req.body.author;
    const updatedBook = await book.save();

    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to delete this book" });
    }

    await Book.findByIdAndDelete(book._id); // <-- Updated line
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

