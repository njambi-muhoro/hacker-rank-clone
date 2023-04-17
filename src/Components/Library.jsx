import React, { useEffect, useState } from 'react';

function Library() {
  const [katas, setKatas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/katas')
      .then(res => res.json())
      .then(response => {
        setKatas(response);
      })
      .catch(error => {
        console.error('Error fetching katas:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center mt-[10vh]">
      <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mt-4 mb-4">Library</h1>
    <div className="">
  {katas.map(kata => (
    <div key={kata.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{kata.name}</h2>
      <p className="text-gray-600">{kata.description}</p>
      <div className="mt-4 flex justify-end">
        <button className="font-bold py-2 px-4 rounded" onClick={() => window.open(kata.url, '_blank')}>
          View Kata
        </button>
      </div>
      <div>
        <span style={{ borderColor: kata.rank.color}}>{kata.rank.name}</span>
      </div>
    </div>
  ))}
</div>




      </div>
    </div>
  );
}

export default Library;
