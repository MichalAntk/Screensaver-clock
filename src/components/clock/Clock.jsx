import { useState, useEffect } from "react";
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className = "clock">
            {time.toLocaleTimeString()}
        </div>
    );
};

export default Clock;