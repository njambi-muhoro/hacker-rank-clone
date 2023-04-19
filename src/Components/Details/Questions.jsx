import React, { useState, useEffect } from 'react'


function Questions({data}) {
  const [assessment, setAssessment] = useState('data');

  


    function deleteKata(id) {
  fetch(`http://localhost:3000/assessment_katas/${id}`, {
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
    {assessment?.katas && assessment.katas.map(kata => (
      <tr key={kata.id}>
        <td>{kata.name}</td>
        <td>{kata.name}</td>
        <td>{kata.name}</td>
        <td>{kata.name}</td>
        <td>{kata.name}</td>
        <td>
          <button>Edit</button>
          <button onClick={() => deleteKata(kata.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default Questions