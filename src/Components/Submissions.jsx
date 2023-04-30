import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function Submissions() {
  const { id } = useParams()
  console.log(id)
    // const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const [submissions, setSubmissions] = useState('')
  const [percentage, setPercentage] = useState('')
  
useEffect(() => {  
  fetch(`http://localhost:3000/submissions?assessment_id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
    }
  })
    .then(res => res.json())
    .then(response => {
      setSubmissions(response)
      console.log(response)
      const allTestsPassed = response.every(submission => submission.result === true);
      const percentageResult = allTestsPassed ? 100 : 0;
      setPercentage(percentageResult);
    })
}, [id]);


    
  return (
    <div className='min-h-screen bg-gray-100 items-center mt-[10vh]' style={{ minHeight: '100vh' }}>
      <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8 ">
        <h1>Your test summary</h1>
        <div className='flex'>
        <div className='bg-white w-3/4 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out mt-10'>
          <h1>Tasks summary</h1>
            {submissions && Array.isArray(submissions) && submissions.map((submission) => (
             <>   
        <div key={submission.id} className='bg-white w-full flex justify-between rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out mt-10'>
        <div>{submission.assessment.title}</div>
        <div>{submission.kata.name}</div>
        <div>{submission.result ? 'Passed' : 'Failed'}</div>
        
   </div>
         </> 

        ))}</div>
 <div className='relative mx-4 rounded-lg w-1/4 shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out mt-10'>
  <h1>Total score</h1>
  <div className="relative rounded-full h-32 w-32 flex items-center justify-center bg-gray-200">
  <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-500"></div>
  <div
    className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-transparent"
    style={{
      clip: `rect(0px, 16px, 32px, 0px)`,
      transform: `rotate(${(percentage / 100) * 360}deg)`,
      transition: `transform 0.6s ease 0s`,
      borderWidth: '4px',
      borderColor: '#1E90FF transparent transparent #1E90FF'
    }}
  ></div>
  <div className="absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center">
    <div className="text-4xl font-bold text-blue-500">{percentage}%</div>
  </div>
</div>

</div>



          </div>
          </div>
        
      </div>
   
  )
}

export default Submissions;