"use client";
import { useState, useEffect } from "react";

export default function Timer({ endDate }: { endDate: string }) {
    const [timeLeft, setTimeLeft] = useState<{
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
        const targetDate = new Date(endDate);

        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - Date.now();
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });
        };

        const interval = setInterval(() => {
            calculateTimeLeft();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full items-center justify-center flex flex-wrap gap-x-[20px] lg:gap-x-[30px]">
            <TimerItem
                timer={timeLeft.days}
                value={timeLeft.days == 1 ? "day" : "days"}
            />
            <TimerItem
                timer={timeLeft.hours}
                value={timeLeft.hours == 1 ? "hour" : "hours"}
            />
            <TimerItem
                timer={timeLeft.minutes}
                value={timeLeft.minutes == 1 ? "minute" : "minutes"}
            />
            <TimerItem
                timer={timeLeft.seconds}
                value={timeLeft.seconds == 1 ? "second" : "seconds"}
            />
        </div>
    );
}

function TimerItem({ timer, value }: { timer: any; value: string }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-[52px] lg:text-[64px] font-semibold leading-tight">
                {timer < 10 ? `0${timer}` : timer}
            </div>
            <div className="text-amber-500 lg:text-[18px]">{value}</div>
        </div>
    );
}
