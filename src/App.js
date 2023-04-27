import './App.css';
import Home from './Components/Home/Home';
//import Crud from './Components/crud/Crud';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register/Register';
import Update from './Components/Home/Update';

function App() {
 
  return (
    <div className="App">
     <NavBar />
     <BrowserRouter>
    <Routes>
     <Route path="/register" element={<Register />}   />
     <Route path="/login" element={<Login />}   />
     <Route path="/update/:id" element={<Update />}   />
    <Route path="/" element={
      <Home />  
    
    }   />
    
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
