import { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style = {{ fontSize: "48px", fontFamily: "monospace" }}>
            {time.toLocaleTimeString()}
        </div>
    );
};

export default Clock;