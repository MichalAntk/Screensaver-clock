import { useState, useEffect, useRef } from "react";
import StopwatchMilisecs from "./StopwatchMilisecs";
import StopwatchSecond from "./StopwatchSecond";
import StopwatchMinute from "./StopwatchMinute";
import StopwatchHour from "./StopwatchHour";
import "./Stopwatch.css";

const Stopwatch = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const intervalRef = useRef(null);

    const start = () => {
        if (!isCounting) {
            setIsCounting(true);
            intervalRef.current = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 10);
        }
    };

    const stop = () => {
        setIsCounting(false);
        clearInterval(intervalRef.current);
    };

    const reset = () => {
        stop();
        setElapsedTime(0);
    };

    const hours = Math.floor(elapsedTime / 360000);
    const minutes = Math.floor((elapsedTime % 360000) / 6000);
    const seconds = Math.floor((elapsedTime % 6000) / 100);
    const milliseconds = elapsedTime % 100;

    return (
        <div className="stopwatch">
            <StopwatchHour hour={hours} />
            <StopwatchMinute minute={minutes} />
            <StopwatchSecond second={seconds} />
            <StopwatchMilisecs milisecond={milliseconds} />
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Stopwatch;