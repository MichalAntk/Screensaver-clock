function Minute ({ minute }) {
    return (
        <div className = "minute">
            {minute < 10? `0${minute}` : minute}
        </div>
    );
}

export default Minute;