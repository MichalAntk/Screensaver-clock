function StopwatchSecond ({ second }) {
    return (
        <div className = "stopwatchSecond">
            {second < 10 ? `0${second}`: second }
        </div>
    )
}

export default StopwatchSecond;