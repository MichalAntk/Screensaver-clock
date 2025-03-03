function StopwatchMilisecs ({ milisecond }) {
    return (
        <div className = "stopwatch-part ms">
            {milisecond < 10 ? `0${milisecond}`: milisecond }
        </div>
    )
}

export default StopwatchMilisecs;