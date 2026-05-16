// In-memory note storage
const notes = [];
let noteIdCounter = 1;

const Note = {
  find: async () => {
    return notes;
  },
  findById: async (id) => {
    return notes.find(note => note.id === parseInt(id));
  },
  create: async (noteData) => {
    const newNote = {
      id: noteIdCounter++,
      title: noteData.title,
      content: noteData.content,
      pdf: noteData.pdf || null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    notes.push(newNote);
    return newNote;
  },
  findByIdAndUpdate: async (id, updateData) => {
    const note = notes.find(n => n.id === parseInt(id));
    if (!note) return null;
    Object.assign(note, updateData, { updatedAt: new Date() });
    return note;
  },
  findByIdAndDelete: async (id) => {
    const index = notes.findIndex(n => n.id === parseInt(id));
    if (index === -1) return null;
    return notes.splice(index, 1)[0];
  }
};

module.exports = Note;