import { useState } from "react";
import API from "../services/api";

function AISummarizer({ summary, onSave }) {
  const [title, setTitle] = useState("AI Summary");
  const [statusMessage, setStatusMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!summary) {
      setStatusMessage("No summary available to save.");
      return;
    }

    setSaving(true);
    setStatusMessage("");

    try {
      await API.post("/notes", { title, content: summary });
      setStatusMessage("Saved successfully!");
      if (onSave) onSave();
    } catch (error) {
      console.error(error);
      setStatusMessage(
        error?.response?.data?.message || "Failed to save note."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-xl mt-8">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">AI Summary</h2>

      <div className="text-slate-300 leading-7 whitespace-pre-line mb-6">
        {summary || "Your summarized notes will appear here."}
      </div>

      {summary && (
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white"
            placeholder="Note title"
          />

          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
          >
            {saving ? "Saving..." : "Save Note"}
          </button>

          {statusMessage && (
            <p className="text-cyan-300">{statusMessage}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AISummarizer;
