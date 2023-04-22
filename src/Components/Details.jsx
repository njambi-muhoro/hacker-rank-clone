import React, {useState} from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import { GoPlus } from 'react-icons/go';


function Details() {
  const { id } = useParams();
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [assessment, setAssessment] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  }


  return (
    <div
      className="mt-4 min-h-screen bg-gray-100 items-center mt-[10vh]"
      style={{ minHeight: "100vh" }}
    >
      <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="my-4">
          <h1 className="text-2xl font-bold">Assessment Details</h1>
          <p className="text-gray-500 mt-2">
            Here is some information about the assessment.
          </p>
        </div>
        <nav className="flex justify-between max-w-full">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white-900 ">
                Questions
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Do you want to check the list of questions?
            </p>

            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-green-300 dark:focus:ring-blue-800">
              <Link
                to={`/details/${id}/questions`}
                className="text-white-600 font-bold"
              >
                Questions
              </Link>

             
            </button>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Candidates
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Do you want to check the list of Candidates?
            </p>
         

            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">
              <Link
                to={`/details/${id}/candidates`}
                className="text-white-600 font-bold"
              >
                Candidates
              </Link>

             
            </button>
          </div>

          <div  class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Invite Link
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Do you want to check invite links?
            </p>

            <button
  onClick={() => setModalIsOpen(true)}
  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
>
  <Link to={`/details/${id}/invite`} className="text-white-600 font-bold">
    <GoPlus />
    Invite
  </Link>
</button>

            <Modal
       isOpen={modalIsOpen}
       onRequestClose={() => setModalIsOpen(false)}
       style={{
 content: {
   top: '50%',
   left: '50%',
   right: 'auto',
   bottom: 'auto',
   marginRight: '-50%',
   transform: 'translate(-50%, -50%)',
   width: '50%',
   height: '82%',
   display:"flex"
 },
 overlay: {
   backgroundColor: 'rgba(0,0,0,0.5)',
 }
     }}
     >
     
      <div className='flex'>
         <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4">
             <h2 className="text-xl font-bold mb-2">Invite a student</h2>
             <label htmlFor="email" className="block mb-2">Email:</label>
             <input type="text" id="username" name="username" value={email} onChange={(event) => setEmail(event.target.value)} className="block w-full p-2 border border-gray-400 rounded-lg mb-2" />
             <label htmlFor="assessment" className="block mb-2">Assessment:</label>
             <input type="text" id="username" name="username" value={id} onChange={(event) => setAssessment(event.target.value)} className="block w-full p-2 border border-gray-400 rounded-lg mb-2" />
             <label htmlFor="date" className="block mb-2">End Date:</label>
             <input type="date" id="username" name="username" value={date} onChange={(event) => setDate(event.target.value)} className="block w-full p-2 border border-gray-400 rounded-lg mb-2" />
             <label htmlFor="text" className="block mb-2">Note:</label>
             <textarea rows='3' id="note" name="note" value={note} onChange={(event) => setNote(event.target.value)} className="block w-full p-2 border border-gray-400 rounded-lg mb-2" />
             <button class=' bg-green-500 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
                           type='submit'>Invite</button>
         </form>
         <img src='https://hrcdn.net/fcore/assets/work/tests/reports/invite-icon-ecb1953efe.svg'alt='' style={{width:"50%", padding:"2px"}}/>
       </div>
</Modal>
     
          </div>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Details;
