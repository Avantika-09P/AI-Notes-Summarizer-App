function Activity() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        AI Activity
      </h2>

      <div className="space-y-4">

        <div className="bg-slate-800 p-4 rounded-xl">
          AI summarized DBMS notes
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          PDF uploaded successfully
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          New summary generated
        </div>

      </div>

    </div>
  );
}

export default Activity;