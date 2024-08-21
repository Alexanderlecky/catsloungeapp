import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
    return (
        <nav className="navbar">
            <h1>The Cats Lounge</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/facts">Cat Facts</Link></li>
                <li><Link to="/fact-of-the-day">Fact of the Day</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/profile"></Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;