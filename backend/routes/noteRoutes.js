const express = require("express");
const router = express.Router();

const {
  getNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote
} = require("../controllers/noteController");

const upload = require("../middleware/upload");

// GET all notes (temporarily remove auth for testing)
router.get("/", getNotes);

// GET single note (temporarily remove auth for testing)
router.get("/:id", getNote);

// CREATE note with optional PDF upload
router.post("/", upload.single("pdf"), createNote);

// UPDATE note with optional PDF upload
router.put("/:id", upload.single("pdf"), updateNote);

// DELETE note (temporarily remove auth for testing)
router.delete("/:id", deleteNote);

module.exports = router;