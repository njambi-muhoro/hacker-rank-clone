
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
    <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8 h-[100vh]">
      <h1 className="text-3xl font-bold mt-4 mb-4">{assessment ? assessment.title : 'Loading...'}</h1>
      <table>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Score</th>
            <th>Type</th>
            <th>Time</th>
            <th>Skills</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
       {assessment?.katas?.map(kata => (
  <tr key={kata.id}>
    <td>{kata.name}</td>
    <td>{kata.score}</td>
    <td>{kata.type}</td>
    <td>{kata.time}</td>
    <td>{kata.skills ? kata.skills.join(', ') : ''}</td> // Check if kata.skills is defined
    <td>
      <button>Edit</button>
      <button onClick={() => deleteKata(kata.id)}>Delete</button>
    </td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
}

export default Questions;
