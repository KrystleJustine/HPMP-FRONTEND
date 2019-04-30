import React from "react";
import { Link, withRouter } from "react-router-dom";


const NavBar = props => {
    return (
        <ul>
            <Link to="/home">
                <li>Home</li>
            </Link>
            <Link to="/projects">
                <li>Projects</li>
            </Link>
            <Link to="/signup">
                <li>Sign Up</li>
            </Link>
            <Link to="/login">
                <li>Log In</li>
            </Link>
            <Link onClick={() => props.handleLogout()}>Log Out</Link>
        </ul>
    );
};

export default withRouter(NavBar);