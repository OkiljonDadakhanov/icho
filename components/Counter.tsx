"use client";

import React, { useState, useEffect } from "react";

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-01T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mt-7">
      <section className="main flex flex-col items-center justify-center text-white">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-center p-4 rounded-lg">
            <h1 className="text-3xl font-bold">{timeLeft.days}</h1>
            <p className="text-xl">Days</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-center p-4 rounded-lg">
            <h1 className="text-3xl font-bold">{timeLeft.hours}</h1>
            <p className="text-xl">Hours</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-center p-4 rounded-lg">
            <h1 className="text-3xl font-bold">{timeLeft.minutes}</h1>
            <p className="text-xl">Minutes</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-center p-4 rounded-lg">
            <h1 className="text-3xl font-bold">{timeLeft.seconds}</h1>
            <p className="text-xl">Seconds</p>
          </div>
        </div>
      </section>
    </div>
  );
}
