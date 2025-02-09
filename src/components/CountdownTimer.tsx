
import { useState, useEffect } from "react";

const calculateTimeLeft = () => {
  const difference = +new Date("2024-12-27") - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="py-20 bg-wedding-beige/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-wedding-rose-gold mb-2">
                {value}
              </div>
              <div className="text-wedding-brown capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
