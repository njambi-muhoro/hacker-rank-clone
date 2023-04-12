import SignUp from "./Components/SignUp";
import {Routes, Route} from 'react-router';
import './App.css';
import NavBar from "./Components/NavBar"
import Login from "./Components/Login"
import HomePage from "./Components/HomePage"




function App() {
  
  return (
    <>
    <NavBar/>
    

    <Routes>

    
      <Route path='/' element={<HomePage/>}/>
      
      <Route  path="/login" element={<Login/>} />
      <Route path="/register" element={<SignUp/>} />

    </Routes>
    </>
  );
}

export default App;
