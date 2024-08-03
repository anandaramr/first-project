import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "./Auth/AuthContext"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Auditorium from "./Pages/Auditorium"
import Hotel from "./Pages/Hotel"
import Gym from "./Pages/Gym"
import Profile from "./Pages/Profile"

function App() {

  return (
    <AuthProvider>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/auditorium" element={<Auditorium/>}/>
          <Route path="/rooms" element={<Hotel/>}/>
          <Route path="/sports" element={<Gym/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
