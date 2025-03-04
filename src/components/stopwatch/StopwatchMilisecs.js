function StopwatchMilisecs ({ milisecond }) {
    return (
        <div className = "stopwatchMs">
            {milisecond < 10 ? `0${milisecond}`: milisecond }
        </div>
    )
}

export default StopwatchMilisecs;