import { useState, useEffect } from "react";
import Hour from './Hour';
import Minute from './Minute';
import Second from './Second';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
        <div className = "clock">
            <Hour hour = {hours} />
            <span>:</span>
            <Minute minute = {minutes} />
            <Second second = {seconds} />
        </div>
    );
};

export default Clock;