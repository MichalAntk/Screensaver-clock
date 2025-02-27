function Second ({ second }) {
    return (
        <div className = "time-part second">
            {second < 10 ? `0${second}` : second}
        </div>
    );
}

export default Second;