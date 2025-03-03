function Second ({ second }) {
    return (
        <div className = "second">
            {second < 10 ? `0${second}` : second}
        </div>
    );
}

export default Second;