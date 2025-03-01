function Day ({ day }) {
    const getDaySuffix = (day) => {
        if(day >= 11 && day <= 13) return "th";
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    return (
        <div className = "date-part day">
            {day}{getDaySuffix(day)}
        </div>
    )
}

export default Day;