import React from "react";
import { Link } from "react-router-dom";

export default function Header({ user }) {
    return (
        <header>
            <Link id="home-button" to="/">KapeCRM</Link>
            <nav>
                <Link id="about-button" to="/about">About</Link>
                {user ? (<span id="user-name">{user.username}</span>)
                    : (<Link id="login-button" to="/login">Login</Link>)}
            </nav>
        </header>
    );
}