import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../App";

export default function Header({ user, jwToken }) {

    const { jwtToken } = React.useContext(AuthContext)

    return (
        <div>
            <header>
                <Link id="home-button" to="/">KapeCRM</Link>
                <nav>
                    <Link id="about-button" to="/about">About</Link>
                    {jwtToken !== "" ? (<Link id="user-name" to="/profile">{user.username}</Link>)
                        : (<Link id="login-button" to="/login">Login</Link>)}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}