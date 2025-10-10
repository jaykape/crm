import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Contacts from "./pages/Contacts.jsx";
import Deals from "./pages/Deals.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Setting.jsx";
import Header from "./components/Header.jsx";

export const AuthContext = React.createContext();

export default function App() {
  const [jwtToken, setJwtToken] = React.useState("");
  const [user, setUser] = React.useState(null);

  const login = (token, userData) => {
    setJwtToken(token);
    setUser(userData)
  }

  const logout = () => {
    setJwtToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ jwtToken, user, login, logout }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="contacts" element={<Contacts />} />
            <Route path="deals" element={<Deals />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthContext.Provider>
  );
}
