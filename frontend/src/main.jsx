import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
