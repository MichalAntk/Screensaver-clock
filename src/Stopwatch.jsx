import { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    
    const start = () => setIsCounting(true);
    const stop = () => setIsCounting(false);
    const reset = () => {
        setIsCounting(false);
        setTime(0);
    };

    useEffect(() => {
        let interval;
        if(isCounting) {
            interval = setInterval(() =>{
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isCounting]);

    return (
        <div>
            <h1>Čas: {time}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
};

export default Stopwatch;