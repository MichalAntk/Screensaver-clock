function StopwatchMinute ({ minute }) {
    return (
        <div className = "stopwatchMinute">
            {minute < 10 ? `0${minute}`: minute }
        </div>
    )
}

export default StopwatchMinute;