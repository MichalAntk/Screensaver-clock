import { useState, useEffect} from "react";
import Weekday from "./Weekday";
import Day from "./Day";
import Month from "./Month";
import Year from "./Year";
import "./DateDisplay.css";

const DateDisplay = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() =>{
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
    const day = date.getDate();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()];
    const year = date.getFullYear();
    

    return(
        <div className="date-container">
            <Weekday weekday={weekday} />
            <Day day={day} />
            <Month month={month} />
            <Year year={year} />
        </div>
    )
}

export default DateDisplay;