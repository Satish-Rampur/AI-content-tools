import { getSummaryAndInsights } from "../../services/aiService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const file = req.body;
      const { summary, insights } = await getSummaryAndInsights(file);
      res.status(200).json({ summary, insights });
    } catch (error) {
      console.error("Error analyzing text:", error);
      res.status(500).json({ error: "Failed to analyze text" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}