import React,{useEffect} from "react";
import { Outlet, Link, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  useEffect(() => {
    // make an API call to retrieve the assessment and katas data
    fetch(`/assessments/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
      })
      .catch(error => console.error(error));
  }, [id]);
  return (
    <div className='min-h-screen bg-gray-100 items-center mt-[10vh]' style={{ minHeight: '100vh' }}>
      <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
        <nav className="flex justify-between max-w-full">
          <ul className="flex">
              <li className="mr-6">
<Link to={`/details/questions`} className="text-gray-600 hover:text-gray-800 border-b-4 border-black-500">Questions</Link>
            </li>
            <li className="mr-6">
<Link to={`/details/candidates`} className="text-gray-600 hover:text-gray-800 border-b-4 border-black-500">Candidates</Link>
            </li>
          
            <li className="mr-6">
<Link to={`/details/invite-links`} className="text-gray-600 hover:text-gray-800 border-b-4 border-black-500">Invite Links</Link>
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

