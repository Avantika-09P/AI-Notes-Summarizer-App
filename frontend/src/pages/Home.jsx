import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import UploadForm from "../components/UploadForm";
import AISummarizer from "../components/AISummarizer";
import DashboardCards from "../components/DashboardCards";
import Activity from "../components/Activity";

function Home() {
  const [summary, setSummary] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash]);

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10 overflow-y-auto">
        <section id="dashboard">
          <h1 className="text-4xl font-bold mb-8">AI Study Dashboard</h1>
          <DashboardCards />
        </section>

        <section id="upload" className="mt-16">
          <UploadForm setSummary={setSummary} />
        </section>

        <section id="summarize" className="mt-16">
          <AISummarizer summary={summary} />
        </section>

        <section id="activity" className="mt-16">
          <Activity />
        </section>
      </div>
    </div>
  );
}

export default Home;

