import React from "react";
import { Link } from "react-router-dom";

export default function Header({ user, jwToken }) {

    return (
        <header>
            <Link id="home-button" to="/">KapeCRM</Link>
            <nav>
                <Link id="about-button" to="/about">About</Link>
                {jwToken !== "" ? (<Link id="user-name" to="/profile">{user.username}</Link>)
                    : (<Link id="login-button" to="/login">Login</Link>)}
            </nav>
        </header>
    );
}