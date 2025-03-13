import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/stopwatch">Stopwatch</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;