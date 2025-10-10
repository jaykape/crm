import React, { useState, useContext } from "react";
import { AuthContext } from "../App.jsx";

export default function Register() {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [firstName, setFirstNamee] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://example.com/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Registration failed");
            }

            const data = await response.json();
            // data = { token: "jwt-token", user: { username, email } }

            login(data.token, data.user); // Automatically log in user
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div id="register-container">
            <div id="register-form">
                <h1>Create your <a href="/" id="register-inline-logo">KapeCRM</a> account</h1>

                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"

                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-row">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"

                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-row">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"

                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-row">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"

                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-row">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"

                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-row">
                        <label htmlFor="confirmPassword">Confirm</label>
                        <input
                            type="password"
                            id="confirmPassword"

                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>


                <div id="register-bottom">
                    Already have a KapeCRM account? <a href="/login">Login</a>
                </div>
            </div>
            <div id="register-image"></div>
        </div>
    );
}
