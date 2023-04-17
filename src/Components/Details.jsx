import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [assessment, setAssessment] = useState(null);
  const [katas, setKatas] = useState([]);
  
  useEffect(() => {
    // make an API call to retrieve the assessment and katas data
    fetch(`/assessments/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAssessment(data.assessment);
        setKatas(data.katas);
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center mt-[10vh]">
      <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mt-4 mb-4">{assessment ? assessment.name : 'Loading...'}</h1>
        <div className="grid grid-cols-3 gap-4">
          {katas && katas.map(kata => (
            <div key={kata.id} className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">{kata.name}</h2>
              <p className="text-gray-700">{kata.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details
