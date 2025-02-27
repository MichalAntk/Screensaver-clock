import { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);

    useEffect(() =>  {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    },[]);

    return (
        <div>
            <p>Čas: {time}</p>
        </div>
    );
};

export default Stopwatch;