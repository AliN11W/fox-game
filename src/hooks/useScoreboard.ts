import { useEffect, useState } from "react";

export type Score = {
  date: string;
  name: string;
  score: number;
};

export default function useScoreboard() {
  const [records, setRecords] = useState<Score[]>([]);

  useEffect(() => {
    const storedScores = localStorage.getItem("scores");
    if (storedScores) {
      setRecords(JSON.parse(storedScores));
    }
  }, []);

  const submitScore = (score: number) => {
    const storedScores = localStorage.getItem("scores");
    const scores = storedScores ? JSON.parse(storedScores) : [];
    const name = localStorage.getItem("name");
    const record = {
      name,
      score,
      date: new Date().toISOString(),
    };

    scores.push(record);
    localStorage.setItem("scores", JSON.stringify(scores));
  };

  return { submitScore, records };
}
