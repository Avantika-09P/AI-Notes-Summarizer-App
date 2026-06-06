import React from "react";
import { FaBolt, FaFilePdf, FaBrain } from "react-icons/fa";

const Features = () => {
  return (

    <div className="grid md:grid-cols-3 gap-8 mt-20 w-full max-w-6xl">

      <div className="bg-slate-900/70 border border-cyan-500/10 rounded-3xl p-8">

        <FaFilePdf className="text-cyan-400 text-4xl mb-5" />

        <h3 className="text-white text-2xl font-bold mb-3">
          PDF Upload
        </h3>

        <p className="text-gray-400">
          Upload study material and notes securely.
        </p>

      </div>

      <div className="bg-slate-900/70 border border-cyan-500/10 rounded-3xl p-8">

        <FaBrain className="text-cyan-400 text-4xl mb-5" />

        <h3 className="text-white text-2xl font-bold mb-3">
          AI Summaries
        </h3>

        <p className="text-gray-400">
          Generate simplified summaries instantly.
        </p>

      </div>

      <div className="bg-slate-900/70 border border-cyan-500/10 rounded-3xl p-8">

        <FaBolt className="text-cyan-400 text-4xl mb-5" />

        <h3 className="text-white text-2xl font-bold mb-3">
          Fast Processing
        </h3>

        <p className="text-gray-400">
          Quick AI-powered note analysis and output.
        </p>

      </div>

    </div>
  );
};

export default Features;