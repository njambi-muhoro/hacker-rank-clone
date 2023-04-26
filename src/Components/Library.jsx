import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Library({search}) {
  const [katas, setKatas] = useState([]);

  const navigate = useNavigate()

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

  const filteredKatas = katas && katas.filter(k => k.name.includes(search))

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center mt-[10vh]">
      <div className="lg:max-w-6xl mx-auto px-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mt-4 mb-4">Library</h1>
        <div className="">
          {
            katas && katas.map(kata => (
              <div key={kata.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                <h2 className="text-lg font-semibold mb-2">{kata.name}</h2>
                <div>
                  {
                    (kata.description.split(/[\n]+/).map(sentence => {
                      return (sentence)
                    })[0])
                  }
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="font-bold py-2 px-4 rounded" >
                    View Kata
                  </button>
                </div>
                <div>
                  <span style={{ borderColor: kata.rankcolor}}>{kata.rank.name}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Library;
