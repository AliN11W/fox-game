import Card from "@/components/Card";
import UserContext from "@/context/UserContext";
import PlayScreen from "@/pages/Play";
import ScoreboardScreen from "@/pages/Scoreboard";
import WelcomeScreen from "@/pages/Welcome";
import { Typography } from "@material-tailwind/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <UserContext>
          <div className="main-container max-w-[550px] mx-auto my-10">
            <Card>
              <Typography
                variant="h1"
                className="text-[2rem] text-center mb-7 font-light"
              >
                Click the Fox! Game
              </Typography>
              <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/play" element={<PlayScreen />} />
                <Route path="/scoreboard" element={<ScoreboardScreen />} />
              </Routes>
            </Card>
          </div>
        </UserContext>
      </Router>
    </>
  );
}
