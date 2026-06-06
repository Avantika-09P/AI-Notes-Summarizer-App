import StatsCard from "./StatsCard";

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

      <StatsCard title="Uploaded PDFs" value="12" />

      <StatsCard title="AI Summaries" value="18" />

      <StatsCard title="Study Hours Saved" value="34h" />

    </div>
  );
}

export default DashboardCards;