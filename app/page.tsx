"use client";

import { getEndCountdownTime } from "./lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const countdown = getEndCountdownTime();
      setCountdown(() => {
        return {
          days: countdown.days,
          hours: countdown.hours,
          minutes: countdown.minutes,
          seconds: countdown.seconds,
        };
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(countdown);

  return (
    <main className="bg-[#F2F1ED] w-screen h-screen flex flex-col items-center justify-center px-4">
      <p className="mb-5 text-2xl font-thin text-center">
        COUNTING DOWN{" "}
        <span className="font-normal text-red-600">NEXT 8 MARCH</span>
      </p>
      <div className="grid grid-cols-2 md:flex  gap-5">
        <div>
          <p className="text-lg text-stone-400 text-center mb-2">Days</p>
          <div className="flex gap-1 justify-center">
            <p className="text-4xl font-bold text-red-400 tabular-nums bg-white p-3 rounded-md shadow-lg">
              {countdown.days.toString().length > 2
                ? countdown.days.toString().charAt(0)
                : "0"}
            </p>
            <p className="text-4xl font-bold text-red-400 tabular-nums bg-white p-3 rounded-md shadow-lg">
              {countdown.days.toString().length > 2
                ? countdown.days.toString().charAt(1)
                : countdown.days.toString().length > 1
                ? countdown.days.toString().charAt(0)
                : "0"}
            </p>
            <p className="text-4xl font-bold text-red-400 tabular-nums bg-white p-3 rounded-md shadow-lg">
              {countdown.days.toString().length > 2
                ? countdown.days.toString().charAt(2)
                : countdown.days.toString().length > 1
                ? countdown.days.toString().charAt(1)
                : countdown.days.toString().charAt(0)}
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg text-stone-400 text-center mb-2">Hours</p>
          <div className="flex gap-1 justify-center">
            <p className="text-4xl font-bold text-red-400 tabular-nums bg-white p-3 rounded-md shadow-lg">
              {countdown.hours.toString().length > 1
                ? countdown.hours.toString().charAt(0)
                : "0"}
            </p>
            <p className="text-4xl font-bold text-red-400 tabular-nums bg-white p-3 rounded-md shadow-lg">
              {countdown.hours.toString().length == 1
                ? countdown.hours.toString().charAt(0)
                : countdown.hours.toString().charAt(1)}
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg text-stone-400 text-center mb-2">Minutes</p>
          <div className="flex gap-1 justify-center">
            <p className="text-4xl font-bold text-red-400 tabular-nums bg-white p-3 rounded-md shadow-lg">
              {countdown.minutes.toString().length > 1
                ? countdown.minutes.toString().charAt(0)
                : "0"}
            </p>
            <p className="text-4xl font-bold text-red-400 tabular-nums bg-white p-3 rounded-md shadow-lg">
              {countdown.minutes.toString().length == 1
                ? countdown.minutes.toString().charAt(0)
                : countdown.minutes.toString().charAt(1)}
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg text-stone-400 text-center mb-2">Seconds</p>
          <div className="flex gap-1 justify-center">
            <p className="text-4xl font-bold text-red-400 tabular-nums bg-white p-3 rounded-md shadow-lg">
              {countdown.seconds.toString().length > 1
                ? countdown.seconds.toString().charAt(0)
                : "0"}
            </p>
            <p className="text-4xl font-bold text-red-400 tabular-nums bg-white p-3 rounded-md shadow-lg">
              {countdown.seconds.toString().length == 1
                ? countdown.seconds.toString().charAt(0)
                : countdown.seconds.toString().charAt(1)}
            </p>
          </div>
        </div>
      </div>
      <p className="mb-8 text-xl font-thin mt-6 text-center">
        Hopefully,{" "}
        <span className="font-normal text-red-400">things get better</span>{" "}
        every day. Love you!
      </p>
    </main>
  );
}
