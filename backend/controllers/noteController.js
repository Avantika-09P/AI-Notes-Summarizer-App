const Note = require("../models/Note");

// GET all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content required" });
    }

    const noteData = { title, content };
    if (req.file) {
      noteData.pdf = req.file.filename;
    }

    const note = await Note.create(noteData);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single note
const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE note
const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updateData = { title, content };
    if (req.file) {
      updateData.pdf = req.file.filename;
    }

    const note = await Note.findByIdAndUpdate(req.params.id, updateData);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE note
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export all
module.exports = {
  getNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote
};