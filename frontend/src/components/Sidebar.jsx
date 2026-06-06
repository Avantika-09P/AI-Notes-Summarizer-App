import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `block rounded-2xl px-3 py-3 transition-all text-left w-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 ${
      isActive ? "shadow-lg shadow-cyan-500/40" : ""
    }`;

  return (
    <div className="w-64 bg-slate-900 min-h-screen p-6 border-r border-slate-800">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        AI Notes
      </h1>

      <ul className="space-y-3 text-sm">
        <li>
          <NavLink to="/" className={linkClasses} end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/", hash: "#upload" }} className={linkClasses}>
            Upload Notes
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/", hash: "#summarize" }} className={linkClasses}>
            AI Summaries
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes" className={linkClasses}>
            Saved Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={linkClasses} end>
            Settings
          </NavLink>
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;