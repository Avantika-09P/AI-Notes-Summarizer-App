import { useEffect, useState } from "react";
import API from "../services/api";

function NotesHistory() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    setError("");
    setInfoMessage("");

    try {
      const response = await API.get("/notes");
      setNotes(response.data);
    } catch (err) {
      console.error(err);
      setError("Unable to load saved notes.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (noteId) => {
    setDeletingId(noteId);
    setError("");
    setInfoMessage("");

    try {
      await API.delete(`/notes/${noteId}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
      setInfoMessage("Note deleted successfully.");
    } catch (err) {
      console.error(err);
      setError("Could not delete note. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg w-full mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Saved Notes</h2>
        {infoMessage && <p className="text-cyan-300">{infoMessage}</p>}
      </div>

      {loading && <p className="text-slate-300">Loading saved notes...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && notes.length === 0 && (
        <p className="text-slate-300">No saved notes yet.</p>
      )}

      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-slate-700 p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h3 className="font-semibold text-cyan-200">{note.title}</h3>
                <p className="text-slate-300 text-sm mt-1 whitespace-pre-line">
                  {note.content}
                </p>
                <p className="text-slate-400 text-xs mt-3">
                  Saved {new Date(note.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() => handleDelete(note.id)}
                  disabled={deletingId === note.id}
                  className="bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white rounded-lg px-4 py-2 text-sm"
                >
                  {deletingId === note.id ? "Deleting..." : "Delete"}
                </button>
                {note.pdf && (
                  <a
                    href={`http://localhost:5000/uploads/${note.pdf}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-lg px-4 py-2 text-sm"
                  >
                    View PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesHistory;
