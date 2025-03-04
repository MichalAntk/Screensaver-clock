function StopwatchHour ({ hour }){
    return (
        <div className = "stopwatchHour ">
            {hour < 10 ? `0${hour}`: hour }
        </div>
    )
}

export default StopwatchHour;