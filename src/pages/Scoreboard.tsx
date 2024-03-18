import StyledLink from "@/components/StyledLink";
import useScoreboard from "@/hooks/useScoreboard";
import formatDate from "@/lib/date";
import { Score } from "@/hooks/useScoreboard";
import { useEffect, useState } from "react";

export default function ScoreboardScreen() {
  const [sortedRecords, setSortedRecords] = useState<Score[]>([]);
  const { records } = useScoreboard();

  useEffect(() => {
    const sorted = records.sort((a, b) => b.score - a.score);
    setSortedRecords(sorted);
  }, [records]);

  return (
    <div>
      <h2 className="text-center text-[1.5rem] mb-4 font-light">Scoreboard</h2>
      {sortedRecords.length === 0 ? (
        <p className="text-center font-light border rounded-xl p-4 bg-gray-100">
          No records yet
        </p>
      ) : (
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Rank
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Name
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Date
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedRecords.map((record, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{record.name}</td>
                <td className="p-4">{formatDate(record.date)}</td>
                <td className="p-4">{record.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex justify-between mt-10">
        <StyledLink to="/" className="w-[49%]">
          To Welcome Screen
        </StyledLink>
        <StyledLink to="/play" className="w-[49%]">
          PLAY!
        </StyledLink>
      </div>
    </div>
  );
}
