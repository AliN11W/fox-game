import { useEffect, useRef, useState } from "react";
import { GAME_DURATION } from "@/constants";

export default function useTimer(initialTime = GAME_DURATION) {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const timerIsStartedRef = useRef(false);

  const start = () => {
    if (timerIsStartedRef.current) {
      // This prevents the timer from starting multiple times
      console.log("Timer already started");
      return;
    }

    timerIsStartedRef.current = true;

    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  useEffect(() => {
    if (time === 0 && timerIsStartedRef.current) {
      timerIsStartedRef.current = false;
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [time]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return { start, time };
}
