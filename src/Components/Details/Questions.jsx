import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Questions() {
  const [assessment, setAssessment] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    // make an API call to retrieve the assessment and katas data
    fetch(`/assessments/${id}`)
      .then(res => res.json())
      .then(data => {
        setAssessment(data);
      })
      .catch(error => console.error(error));
  }, [id]);

  function deleteKata(id) {
    fetch(`http://localhost:3000/assessment_katas/${id}`, {
      method: 'DELETE'
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
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="px-6 py-4">
            <table class="min-w-full text-sm">
              <thead class="border-b">
                <tr>
                  <th class="py-2 px-4 text-left uppercase">Questions({assessment ? assessment.katas.length : 0})</th>
                  <th class="py-2 px-4 text-left uppercase">Score</th>
                  <th class="py-2 px-4 text-left uppercase">Type</th>
                  <th class="py-2 px-4 text-left uppercase">Time</th>
                  <th class="py-2 px-4 text-left uppercase">Skills</th>
                  <th class="py-2 px-4 text-left uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assessment?.katas?.map(kata => (
                  <tr key={kata.id} class="border-b">
                    <td class="py-2 px-4">{kata.name}</td>
                    <td class="py-2 px-4">{kata.score}</td>
                    <td class="py-2 px-4">{kata.type}</td>
                    <td class="py-2 px-4">{kata.time}</td>
                    <td class="py-2 px-4">{kata.skills ? kata.skills.join(', ') : ''}</td>
                    <td class="py-2 px-4">
                      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
                      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => deleteKata(kata.id)}>Delete</button>
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