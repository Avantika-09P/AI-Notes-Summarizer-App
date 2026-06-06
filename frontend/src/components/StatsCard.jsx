function StatsCard({ title, value }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">

      <h2 className="text-slate-400 text-lg">
        {title}
      </h2>

      <p className="text-4xl font-bold text-cyan-400 mt-4">
        {value}
      </p>

    </div>
  );
}

export default StatsCard;