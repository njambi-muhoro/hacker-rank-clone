import React from "react";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.includes(path);
  }

  return (
    <div className='min-h-screen bg-gray-100 items-center mt-[10vh]' style={{ minHeight: '100vh' }}>
      <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
        <nav className="flex justify-between max-w-full">
          <ul className="flex">
            <li className="mr-6">
              <Link to={`/details/${id}/questions`} className={`text-gray-600 hover:text-gray-800 ${isActive('questions') ? 'border-b-4 border-green-500' : 'border-b-4 border-black-500'}`}>Questions</Link>
            </li>
            <li className="mr-6">
              <Link to={`/details/${id}/candidates`} className={`text-gray-600 hover:text-gray-800 ${isActive('candidates') ? 'border-b-4 border-green-500' : 'border-b-4 border-black-500'}`}>Candidates</Link>
            </li>
            <li className="mr-6">
              <Link to={`/details/${id}/results`} className={`text-gray-600 hover:text-gray-800 ${isActive('results') ? 'border-b-4 border-green-500' : 'border-b-4 border-black-500'}`}>Results</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Details;
