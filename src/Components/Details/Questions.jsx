import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai'

function Questions() {
  const [assessment, setAssessment] = useState(null);
  const token = sessionStorage.getItem('jwtToken');
  const { id } = useParams();

  useEffect(() => {
    // make an API call to retrieve the assessment and katas data
    fetch(`https://hacheranck.onrender.com/assessments/${id}`)
      .then(res => res.json())
      .then(data => {
        setAssessment(data);
      })
      .catch(error => console.error(error));
  }, [id]);

  function deleteKata(id) {
    fetch(`https://hacheranck.onrender.com/assessment_katas/${id}`, {
      method: 'DELETE',
           headers: {
       "Content-Type": "application/json",
       'Authorization': `Bearer ${token}`
     }
    })
      .then(response => {
        if (response.ok) {
          // Reload the assessments list or show a success message
          window.location.reload();
        } else {
          // Handle the error
        }
      })
      .catch(error => {
        // Handle the error
      });
  }
return (
  <div>
    <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8 h-[100vh]">
      <h1 className="text-3xl font-bold mt-4 mb-4">{assessment ? assessment.title : 'Loading...'}</h1>
      {/* <h2>{assessment.duration}</h2> */}
      <div className=" p-4 rounded-md">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-2 py-4">
            <table className="min-w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="py-2 px-4 text-left uppercase">Questions({assessment ? assessment.katas.length : 0})</th>
                  <th className="py-2 px-4 text-left uppercase">Score</th>
                  <th className="py-2 px-4 text-left uppercase">Type</th>
                  <th className="py-2 px-4 text-left uppercase">Time</th>
                  <th className="py-2 px-4 text-left uppercase">Skills</th>
                  <th className="py-2 px-4 text-left uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assessment?.katas?.map(kata => (
                  <tr key={kata.id} className="border-b">
                    <td className="py-2 px-4">{kata.name}</td>
                    <td className="py-2 px-4">{kata.score}</td>
                    <td className="py-2 px-4">{kata.category}</td>
                    <td className="py-2 px-4">{kata.time}</td>
                    <td className="py-2 px-4">{kata.skills ? kata.skills.join(', ') : ''}</td>
                    <td className="py-2 px-4">
                      <button className="bg-red-300 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => deleteKata(kata.id)}><AiFillDelete/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
        </div>
      </div>
    </div>
  </div>
);
}
export default Questions;  