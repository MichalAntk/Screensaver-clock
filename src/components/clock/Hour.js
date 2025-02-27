function Hour ({ hour }) {
    return (
        <div className = "time-part hour">
            {hour < 10 ? `0${hour}` : hour}
        </div>
    );
}

export default Hour;