import React, { useState, useContext } from "react";
import { AuthContext } from "../App.jsx";

export default function Login() {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("https://example.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed");
            }

            const data = await response.json();
            // data = { token: "jwt-token", user: { username: "Alice", email: "alice@example.com" } }

            login(data.token, data.user); // ✅ update global auth state
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    const handleGoogleLogin = () => {
        console.log("Google login clicked");
    };



    return (
        <div id="login-container">
            <div id="login-form">

                <h1>Welcome to <a href="/" id="login-inline-logo">KapeCRM</a></h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required

                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required

                    />
                    <button type="submit" >
                        Login
                    </button>
                    <button onClick={handleGoogleLogin}>
                        Continue with Google
                    </button>
                </form>

                <div id="login-bottom">Don't have a KapeCRM account? <a href="/register">Sign up</a></div>

            </div>
            <div id="login-image"></div>
        </div>
    )
}