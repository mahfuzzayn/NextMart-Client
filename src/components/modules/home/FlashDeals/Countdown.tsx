"use client";

import React, { useEffect, useState } from "react";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const bdtOffset = 6 * 60 * 60 * 1000;
            const nowBDT = new Date(now.getTime() + bdtOffset);

            const startDate = new Date("2024-04-01T18:00:00Z");
            const daysSinceStart = Math.floor(
                (nowBDT.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
            );
            const cycleIndex = Math.floor(daysSinceStart / 15);
            const nextReset = new Date(
                startDate.getTime() +
                    (cycleIndex + 1) * 15 * 24 * 60 * 60 * 1000
            );

            const diff = nextReset.getTime() - nowBDT.getTime();
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center">
            <div className="bg-[#f7f7f7] rounded-full px-4 py-2 flex items-center gap-x-2">
                <span className="text-[#a3a3a3] text-lg font-bold">
                    {timeLeft.days}
                </span>
                <span className="text-[#a3a3a3] font-light text-sm">Days</span>
            </div>
            <div className="text-[#a3a3a3] text-xl font-bold mx-2">:</div>
            <div className="bg-[#f7f7f7] rounded-full px-4 py-2 flex items-center gap-x-2">
                <span className="text-[#a3a3a3] text-lg font-bold">
                    {timeLeft.hours}
                </span>
                <span className="text-[#a3a3a3] font-light text-sm">Hours</span>
            </div>
            <div className="text-[#a3a3a3] text-xl font-bold mx-2">:</div>
            <div className="bg-[#f7f7f7] rounded-full px-4 py-2 flex items-center gap-x-2">
                <span className="text-[#a3a3a3] text-lg font-bold">
                    {timeLeft.minutes}
                </span>
                <span className="text-[#a3a3a3] font-light text-sm">
                    Minutes
                </span>
            </div>
            <div className="text-[#a3a3a3] text-xl font-bold mx-2">:</div>
            <div className="bg-[#FFFFFF] border-2 border-[#F94D43] rounded-full px-4 py-2 flex items-center gap-x-2">
                <span className="text-[#F94D43] text-lg font-bold">
                    {timeLeft.seconds}
                </span>
                <span className="text-[#F94D43] font-light text-sm">
                    Seconds
                </span>
            </div>
        </div>
    );
};

export default Countdown;
