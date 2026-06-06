import { useNavigate } from "react-router-dom";
import NotesHistory from "../components/NotesHistory";

function Notes() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <div className="w-64 bg-slate-900 min-h-screen p-6 border-r border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400 mb-10">AI Notes</h1>
        <p className="text-sm text-slate-400">Manage your saved notes in one place.</p>
      </div>

      <main className="flex-1 p-10 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">Saved Notes</h1>
            <p className="text-slate-400 mt-2">Delete notes here or return to upload a new PDF.</p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
          >
            Upload Notes
          </button>
        </div>

        <NotesHistory />
      </main>
    </div>
  );
}

export default Notes;
