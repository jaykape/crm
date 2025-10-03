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
            <div id="login-form">

                <h1>Welcome to <span id="login-inline-logo">KapeCRM</span></h1>

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

                <div id="login-bottom">Don't have a crm.kape.live account? <a href="/signup">Sign up</a></div>

            </div>
            <div id="login-image"></div>
        </div>
    )
}