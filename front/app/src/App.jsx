import './App.css'
import Login from "./pages/Login"
import Clientes from './pages/Clientes'
import Create from './pages/Create';
import Delete from './pages/Delete';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function App() {
 
  return (
    <Router>
    <div>
      <Routes>
       <Route path="" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/create" element={<Create />} />
        <Route path="/clientes/delete/:id" element={<Delete />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
