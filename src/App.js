import SignUp from "./Components/SignUp";
<<<<<<< HEAD
import {Routes, Route} from 'react-router';
import './App.css';
import NavBar from "./Components/NavBar"
import Login from "./Components/Login"
import HomePage from "./Components/HomePage"
import Footer from "./Components/Footer"; 
import QuestionPage from "./Components/QuestionPage";

=======
import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import AuthProvider from "./Components/context/AuthContext";
import DashBoard from "./Components/DashBoard";
import Library from "./Components/Library";
import Assessments from "./Components/Assessments";
// import CodeEditor from "./Components/CodeEditor";
import Details from "./Components/Details";
>>>>>>> 38270517494199dcb6d90ff64d99786a8ca28f19



function App() {
<<<<<<< HEAD
  
  return (
    <>
    {/* <NavBar/> */}
    

    <Routes>

{/*     
      <Route path='/' element={<HomePage/>}/>
      
      
      <Route  path="/login" element={<Login/>} />
      <Route path="/register" element={<SignUp/>} /> */}
      <Route path= "/QuestionPage" element= {<QuestionPage/>} />
      
    </Routes>
    {/* <Footer/> */}
    </>
  );
=======
	return (
		<>
			<AuthProvider>
				<NavBar />

				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/dashboard' element={<DashBoard />} />
					<Route path="/library" element={<Library />} />
					<Route path="/assessments" element={<Assessments />} />
					{/* <Route path="/codeEditor" element={<CodeEditor/>}/> */}
					<Route path="/details/:id" element={<Details/>}/>
				</Routes>
				<Footer />
			</AuthProvider>
		</>
	);
>>>>>>> 38270517494199dcb6d90ff64d99786a8ca28f19
}

export default App;
