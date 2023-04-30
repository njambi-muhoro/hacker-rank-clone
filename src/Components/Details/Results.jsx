import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Results() {
  const { id } = useParams();
  const [submissions, setSubmissions] = useState([]);
    const token = sessionStorage.getItem('jwtToken');


  useEffect(() => {
    fetch(`http://localhost:3000/submissions?assessment_id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(response => {
        setSubmissions(response)
        console.log(response)
    })
  }, []);

  return (
    <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8 h-[100vh] justify-center items-center">
      <div>
        <table>
          <thead>
            <tr>
              <th>Submission ID</th>
              <th>User Name</th>
              <th>Assessment ID</th>
              <th>Kata ID</th>
              <th>Code</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
{submissions && Array.isArray(submissions) && submissions.map((submission) => (
    <tr key={submission.id}>
        <td>{submission.id}</td>
        <td>{submission.user.username}</td>
        <td>{submission.assessment.title}</td>
        <td>{submission.kata.name}</td>
        <td>{submission.code}</td>
        <td>{submission.result ? 'Passed' : 'Failed'}</td>
    </tr>
))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Results;
