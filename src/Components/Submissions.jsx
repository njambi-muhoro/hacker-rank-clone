import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function Submissions() {
  const { id } = useParams()
  console.log(id)
    // const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  const [submissions, setSubmissions] = useState('')
  const [percentage, setPercentage] = useState('')
  
useEffect(() => {  
  fetch(`https://hackerank.onrender.com/submissions?assessment_id=${id}`, {
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
      
      // Calculate average percentage
      const totalPercentage = response.reduce((total, submission) => total + submission.percentage, 0);
      const averagePercentage = totalPercentage / response.length;
      
      setPercentage(averagePercentage);
    })
}, [id]);

const circumference = 2 * Math.PI * 30;

    
  return (
    <div className='min-h-screen bg-gray-100 items-center mt-[10vh]' style={{ minHeight: '100vh' }}>
      <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8 ">
        <h1 className='font-bold mt-[12vh] text-2xl'>Your test summary</h1>
        <div className='flex'>
        <div className='bg-white w-3/4 rounded-lg shadow-md p-9 hover:shadow-lg transition duration-300 ease-in-out mt-10'>
          <h1 className='font-medium'>Tasks summary</h1>
            {submissions && Array.isArray(submissions) && submissions.map((submission) => (
             <>   
        <div key={submission.id} className='bg-white w-full flex justify-between rounded-lg shadow-md p-9 hover:shadow-lg transition duration-300 ease-in-out mt-10'>
        <div>{submission.assessment.title}</div>
                  <div>{submission.kata.name}</div>
                  <div>{submission.result}</div>
                  <div>{submission.percentage}%</div>
<div>{submission.percentage === 0 ? 'Failed' : 'Passed'}</div>
        
   </div>
         </> 

        ))}</div>
<div className='relative mx-4 rounded-lg w-1/4 shadow-md p-2 hover:shadow-lg transition duration-300 ease-in-out mt-10 bg-white px-4'>
  <h1 className='font-medium'>Total score</h1>
  <div x-data="scrollProgress" class="absolute inset-0 flex items-center justify-center px-4">
    <svg class="w-20 h-20">
      <circle
        class="text-gray-300"
        stroke-width="5"
        stroke="currentColor"
        fill="transparent"
        r="30"
        cx="40"
        cy="40"
      />
      <circle
        className="text-green-600"
        strokeWidth="5"
        stroke="currentColor"
        fill="transparent"
        r="30"
        cx="40"
        cy="40"
        strokeLinecap="round"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: circumference - (percentage / 100) * circumference,
        }}
      />
    </svg>
    <span class="absolute text-xm text-green-500 px-4">{percentage}%</span>
  </div>
</div>





          </div>
          </div>
        
      </div>
   
  )
}

export default Submissions;