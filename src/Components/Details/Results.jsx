import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Results() {
  const { id } = useParams();
  const [submissions, setSubmissions] = useState([]);
    const token = sessionStorage.getItem('jwtToken');


  useEffect(() => {
    fetch(`/submissions?assessment_id=${id}`, {
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
    <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8 h-[100vh] justify-center items-center ">
       <div className=" p-4 rounded-md">
      <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <div className='px-2 py-4'>
        <table className='min-w-full text-sm'>
          <thead className='border-b'>
            <tr className="border-b">
              <th className="py-2 px-4">User</th>
              {/* <th className="py-2 px-4">Assessment ID</th> */}
              <th className="py-2 px-4">Kata</th>
              <th className="py-2 px-4">Code</th>
                  <th className="py-2 px-4">Result</th>
                   <th className="py-2 px-4">Feedback</th>
            </tr>
          </thead>
          <tbody>
{submissions && Array.isArray(submissions) && submissions.map((submission) => (
    <tr key={submission.id}>
        <td className="py-2 px-4">{submission.user.username}</td>
        <td className="py-2 px-4">{submission.kata.name}</td>
        <td className="py-2 px-4">{submission.code}</td>
        <td className="py-2 px-4">{submission.percentage === 0 ? 'Failed' : 'Passed'}</td>
        <td className="py-2 px-4">
            <textarea
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter feedback"
                value={submission.feedback || ''}
                onChange={(e) => {
                    const feedback = e.target.value;
                    setSubmissions((prevSubmissions) =>
                        prevSubmissions.map((prevSubmission) =>
                            prevSubmission.id === submission.id
                                ? { ...prevSubmission, feedback }
                                : prevSubmission
                        )
                    );
                }}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
                onClick={() => {
                    // TODO: save feedback to database
                    console.log(submission.feedback);
                }}
            >
                Save
            </button>
        </td>
    </tr>
))}


          </tbody>
        </table>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Results;
