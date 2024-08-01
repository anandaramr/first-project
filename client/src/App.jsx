import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "./Auth/AuthContext"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
function App() {

  return (
    <AuthProvider>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
