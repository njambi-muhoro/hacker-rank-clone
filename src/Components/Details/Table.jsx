import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai'

function Table() {
  const [assessments, setAssessments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://hacheranck.onrender.com/assessments/${id}`, {
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
      fetch(`https://hacheranck.onrender.com/invitations/${id}`, {
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
                     <th scope="col" className="py-2 px-4 text-left uppercase">
                      NO.
                    </th>
                    <th scope="col" className="py-2 px-4 text-left uppercase">
                      Email
                    </th>
                    <th scope="col" className="py-2 px-4 text-left uppercase">
                      Status
                    </th>
                    <th scope="col" className="py-2 px-4 text-left uppercase">
                      End Date
                    </th>
                    <th scope="col" className="py-2 px-4 text-left uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
      <tbody>
  {Array.isArray(assessments?.invitations) &&
    assessments.invitations.map((invitation, index) => (
      <tr
        key={invitation.id}
        className={
          invitation.status === 'completed'
            ? 'border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700'
            : 'border-b bg-white dark:border-neutral-500 dark:bg-neutral-600'
        }
      >
         <td className="whitespace-nowrap px-6 py-4 font-medium">
          {index + 1}.
        </td>
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
          <button class="bg-red-300 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => deleteInvitation(invitation.id)}><AiFillDelete/></button>
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

export default Table;
