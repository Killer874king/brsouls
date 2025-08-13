"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-11-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-white">
      <div className="flex justify-center gap-4 text-2xl font-bold">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-sm font-normal">dias</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-sm font-normal">horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-sm font-normal">min</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-sm font-normal">seg</span>
        </div>
      </div>
    </div>
  );
}
