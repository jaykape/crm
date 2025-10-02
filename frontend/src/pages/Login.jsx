import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
    };

    const handleGoogleLogin = () => {
        console.log("Google login clicked");
    };



    return (
        <div id="login-container">
            <div id="login-form" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",   // full screen height
                background: "#f0f0f0" // parent background color
            }}>
                <div style={{
                    width: "400px",
                    padding: "20px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                }}>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ display: "block", margin: "10px 0", width: "100%" }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ display: "block", margin: "10px 0", width: "100%" }}
                        />
                        <button type="submit" style={{ width: "100%", margin: "10px 0" }}>
                            Login
                        </button>
                    </form>
                    <button
                        onClick={handleGoogleLogin}
                        style={{ width: "100%", background: "#db4437", color: "white" }}
                    >
                        Login with Google
                    </button>
                </div>
            </div>
            <div id="login-image"></div>
        </div>
    )
}