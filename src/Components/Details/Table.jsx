import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Table() {
  const [assessments, setAssessments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/assessments/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAssessments(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]);


  function deleteInvitation(id) {
      fetch(`/invitations/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
        },
      })
        .then(res => res.json())
        .then(response => {
      console.log(response)
    })
  }

  
  return (
    <div className="flex mt-5 sm:px-6 lg:px-8 h-[100vh] w-full">
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="w-full min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 text-xl py-4 font-bold">
                      Email
                    </th>
                    <th scope="col" className="px-6 text-xl py-4 font-bold">
                      Status
                    </th>
                    <th scope="col" className="px-6 text-xl py-4 font-bold">
                      End Date
                    </th>
                    <th scope="col" className="px-6 text-xl py-4 font-bold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
  {Array.isArray(assessments?.invitations) &&
    assessments.invitations.map(invitation => (
      <tr
        key={invitation.id}
        className={
          invitation.status === 'completed'
            ? 'border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700'
            : 'border-b bg-white dark:border-neutral-500 dark:bg-neutral-600'
        }
      >
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          {invitation.email}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {invitation.status}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {invitation.end_date}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => deleteInvitation(invitation.id)}>Delete</button>        </td>
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

export default Table;
