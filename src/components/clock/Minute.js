function Minute ({ minute }) {
    return (
        <div className = "time-part minute">
            {minute < 10? `0${minute}` : minute}
        </div>
    );
}

export default Minute;