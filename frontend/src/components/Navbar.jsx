function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-lg px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cyan-400">
        AI Notes Summarizer
      </h1>

      <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg">
        Login
      </button>
    </nav>
  );
}

export default Navbar;