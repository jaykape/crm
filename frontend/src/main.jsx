import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>
)
