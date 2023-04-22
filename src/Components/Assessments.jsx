import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { ImCross } from 'react-icons/im';
import { AiFillDelete } from 'react-icons/ai';
import { HiViewGridAdd } from 'react-icons/hi';
import Modal from 'react-modal';

function Assessments() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
	const userType = sessionStorage.getItem("userTYpe");
  const [title, setTitle] = useState("")
  const [userId, setUserId] = useState(sessionStorage.getItem("userId"))
  const [duration, setDuration] = useState("")
  const [assessments, setAssessments] = useState("")
  const [showKataList, setShowKataList] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState("")
  const [katas, setKatas] = useState("")
  const assessment_id = selectedAssessment
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  // handle submission logic here
   fetch(`http://localhost:3000/assessments`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, duration, userId
            })
        }
        )
     .then(res => res.json())
     .then(response => {
       setModalIsOpen(false);
    console.log(response)
  })
}
    useEffect(() => {
  
  // fetch katas
  fetch('http://localhost:3000/katas')
    .then(res => res.json())
    .then(data => setKatas(data));
     
  fetch(`http://localhost:3000/assessments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      setAssessments(response)
      console.log(response)
    })
}, []);


function handleAddClick(id) {
  setShowKataList(true);
  setSelectedAssessment(id)
   
  }

function handleKataSelect( id) {
    const kata_id = id
    
  fetch(`/assessment_katas`, {
    method:'POST',
    headers:{
    "Content-Type": "application/json"
  },
    body:JSON.stringify({assessment_id, kata_id})
  }).then(res => res.json())
    .then(response => {
      setShowKataList(false);
    console.log(response)
  })
}

  function deleteAssessment(id) {
  fetch(`/assessments/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      // Reload the assessments list or show a success message
      window.location.reload()
    } else {
      // Handle the error
    }
  })
  .catch(error => {
    // Handle the error
  });
}

   
  return (
    <div className="min-h-[100vh] ">
      {isLoggedIn ? (
				<>
          {userType === "student" ? (
            <>
              <section className="w-full mt-[10vh]">
                <div className="px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-8">
                  <h1>Welcome back. Please attempt the assessments</h1>
                </div>
                </section>
            </>
          ) : userType === "TM" ? (
          <>
      <section className="w-full mt-[10vh]">
        <div className="px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-8">
          <div className="w-full flex items-center justify-between px-3 h-40  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 ">
            <div
              className="text-sm"
              style={{ width: '70%', padding: '10px' }}
            >
              <p>
                Welcome, we're excited to hear that you're interested in creating
                a coding test. Our team is ready to help you design an assessment
                that accurately evaluates the skills of the developers you're
                looking to hire.
              </p>
            </div>
            <div className="flex gap-1 items-center">
             
              <button onClick={openModal}
                style={{ color: 'green', padding: '10px' }}
                className="flex gap-1 items-center"
              >
                <GoPlus />
                Create Assessment
              </button>
            </div>
          </div>
        </div>
                </section>
                 <section className="w-full">
  <div className="px-4 mx-auto lg:max-w-6xl md:items-center md:px-8">
    <h1>My Assessments</h1>
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.isArray(assessments) && assessments.map((assessment) => (
          <div key={assessment.id} className="max-w-sm rounded overflow-hidden shadow-lg relative">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{assessment.title}</div>
              <p className="text-gray-700 text-base">Duration: {assessment.duration}</p>
              <ul className="list-disc mt-4">
                {assessment.assessment_kata && assessment.assessment_kata.map((kata) => (
                  <li key={kata.id}>{kata.name}</li>
                ))}
              </ul>
              <Link style={{ color: "green", padding: "10px" }}
												class='flex gap-1 items-center'
												type='button' to={`/details/${assessment.id}`}><HiViewGridAdd/>view</Link>
              <button style={{ color: "green", padding: "10px" }}
												class='flex gap-1 items-center'
												type='button' onClick={() => deleteAssessment(assessment.id)}><AiFillDelete/>Delete</button>
            </div>
            <button
              className="absolute top-0 right-0 m-4 py-2 px-4 text-black font-bold rounded"
              onClick={() => handleAddClick(assessment.id)}
            >
              <GoPlus /> Add
            </button>
          </div>
        ))}
      </div>
      {showKataList && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-900 bg-opacity-75 z-10">
          <div className="bg-white rounded shadow-lg p-4 max-w-md">
            <h2 className="text-lg font-bold mb-4">Select a kata to add:</h2>
            <ul className="border border-gray-300 rounded overflow-y-scroll max-h-64">
              {katas && katas.map((kata) => (
                <li key={kata.id} className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                  {kata.name}
                  <button
                    className="ml-4 py-1 px-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                    onClick={() => handleKataSelect(kata.id)}
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  </div>
</section>
          </>
          		) : null}
				</>
      ) : (
         <></>
			)}
    

    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '65%',
    display:"flex"
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
      }}>
        
  <div style={{width:"50%"}}><img src='https://hrcdn.net/fcore/assets/work/tests/welcome_screen_people_upd-b44df6b6d8.svg' alt=''/></div>
  <div style={{width:"45%", paddingTop:"40px"}}>
    <form onSubmit={handleSubmit}>
          <h2>SELECT ROLE</h2>
<select
  style={{width:"260px", marginTop:"60px",marginBottom:"15px",padding:"10px", background:"#EAF3F9"}}
  name="duration"
  id="duration"
  value={duration}
  onChange={(e) => setDuration(e.target.value)}
>
  <option value="" selected disabled>Select duration</option>
  <option value="40">40 minutes</option>
  <option value="60">60 minutes</option>
  <option value="120">120 minutes</option>
</select>

<select
  className="shadow appearance-none border-3 bg-[#EAF3F9] rounded  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
  id="role"
  style={{width:"260px"}}
  value={title}
  onChange={(e) => setTitle(e.target.value)}
>
  <option value="" selected disabled>Select Role</option>
  <option value="Back-End Developer">Back-End Developer</option>
  <option value="Back-End Developer(Node)">Back-End Developer(Node)</option>
  <option value="Back-End Developer(Rails)">Back-End Developer(Rails)</option>
  <option value="Back-End Developer(Laravel)">Back-End Developer(Laravel)</option>
  <option value="Full-Stack Developer">Full-Stack Developer</option>
  <option value="Full-Stack Developer(React & Rails)">Full-Stack Developer(React & Rails)</option>
  <option value="Front-End Developer">Front-End Developer</option>
  <option value="Front-End Developer(React)">Front-End Developer(React)</option>
  <option value="Front-End Developer(Vue)">Front-End Developer(Vue)</option>
  <option value="Front-End Developer(Angular)">Front-End Developer(Angular)</option>
  <option value="Cloud Engineer">Cloud Engineer</option>
  <option value="Data Analyst">Data Analyst</option>
</select>
<br />
                  <button style={{marginTop:"25px", background:"#EAF3F9", padding:"7px"}}>Create Asssessment</button>
       </form>
        </div>
  
  <div style={{width:"5%"}}>
    <button onClick={closeModal}><ImCross/></button>
  </div>
</Modal>

    </div>
  );
}

export default Assessments;
