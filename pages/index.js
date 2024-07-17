import { useState } from "react";
import FileUpload from "../components/FileUpload";
import SummaryDisplay from "../components/SummaryDisplay";
import InsightsChart from "../components/InsightsChart";

export default function Home() {
  const [summary, setSummary] = useState(null);
  const [insights, setInsights] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (file) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        body: file,
      });
      const data = await response.json();
      setSummary(data.summary);
      setInsights(data.insights);
    } catch (error) {
      console.error("Error analyzing text:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>AI Content Summarizer and Analyzer</h1>
      <FileUpload onFileChange={handleFileChange} />
      {isLoading && <p>Analyzing text...</p>}
      {summary && <SummaryDisplay summary={summary} />}
      {insights && <InsightsChart insights={insights} />}
    </div>
  );
}