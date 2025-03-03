function StopwatchHour ({ hour }){
    return (
        <div className = "stopwatch-part hour ">
            {hour < 10 ? `0${hour}`: hour }
        </div>
    )
}

export default StopwatchHour;