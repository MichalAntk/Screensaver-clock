function StopwatchMinute ({ minute }) {
    return (
        <div className = "stopwatch-part minute">
            {minute < 10 ? `0${minute}`: minute }
        </div>
    )
}

export default StopwatchMinute;