import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css'
import Header from "./components/Header";

function App() {

  const [jwToken, setJwToken] = useState("");
  const [user, setUser] = useState({ username: "no one" });

  const location = useLocation()

  return (
    <>
      {location.pathname !== "/login" && <Header jwToken={jwToken} user={user} />}
    </>
  )
}

export default App
