function Hour ({ hour }) {
    return (
        <div className = "hour">
            {hour < 10 ? `0${hour}` : hour}
        </div>
    );
}

export default Hour;