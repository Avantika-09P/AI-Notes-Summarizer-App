import React from "react";

const Loader = () => {
  return (

    <div className="flex flex-col items-center mt-10">

      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

      <p className="text-cyan-300 mt-5 text-lg font-semibold">
        AI is analyzing your notes...
      </p>

    </div>
  );
};

export default Loader;