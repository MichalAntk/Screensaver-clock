import { useState, useEffect, useRef } from "react";
import StopwatchMilisecs from "./StopwatchMilisecs";
import StopwatchSecond from "./StopwatchSecond";
import StopwatchMinute from "./StopwatchMinute";
import StopwatchHour from "./StopwatchHour";
import CustomButton from "../buttons/CustomButton";
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
        <div className="stopwatch-container">
            <div className="stopwatch-display">
                <StopwatchHour hour={hours} />
                <span>:</span>
                <StopwatchMinute minute={minutes} />
                <span>:</span>
                <StopwatchSecond second={seconds} />
                <StopwatchMilisecs milisecond={milliseconds} />
            </div>
            <div className="stopwatch-buttons">
                <CustomButton onClick={start} variant="primary" size="medium">
                    Start
                </CustomButton>
                <CustomButton onClick={stop} variant="primary" size="medium">
                    Stop
                </CustomButton>
                <CustomButton onClick={reset} variant="primary" size="medium">
                    Reset
                </CustomButton>
            </div>
        </div>
    );
};

export default Stopwatch;