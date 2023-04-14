import SignUp from "./Components/SignUp";
import {Routes, Route} from 'react-router';
import './App.css';
import NavBar from "./Components/NavBar"
import Login from "./Components/Login"
import HomePage from "./Components/HomePage"
import Footer from "./Components/Footer";
import AuthProvider from "./Components/context/AuthContext";
import DashBoard from "./Components/DashBoard";




function App() {
  
  return (
    <>
    <AuthProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route  path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
      <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
