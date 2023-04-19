import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import AuthProvider from "./Components/context/AuthContext";
import DashBoard from "./Components/DashBoard";
import Library from "./Components/Library";
import Assessments from "./Components/Assessments";
import Details from "./Components/Details";
import Questions from "./Components/Details/Questions";
import Candidates from "./Components/Details/Candidates";
import Invite from "./Components/Details/Invite";
import { useState } from "react";
import ViewKata from "./Components/ViewKata";

function App() {
	const [search, setSearch] = useState("")
	function handleSearch(value){
     setSearch(value)
	}
	return (
		<>
			<AuthProvider>
				<NavBar  search = {search} handleSearch={handleSearch}/>
				<div className="min-h-[70vh]">
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/dashboard' element={<DashBoard />} />
						<Route path='/library' element={<Library search={search} />} />
						<Route path='/assessments' element={<Assessments />} />
						<Route path="/viewkata/:kata_id" element={<ViewKata />} />
						<Route path='/details/:id' element={<Details />}>
						<Route path='questions' element={<Questions  />} />
						<Route path='candidates' element={<Candidates />} />
						<Route path='invite' element={<Invite />} /></Route>
					</Routes>
				</div>
				<Footer />
			</AuthProvider>
		</>
	);
}

export default App;
