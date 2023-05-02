import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';


function ViewKata() {
    const [code, setCode] = useState('')
    const { id } = useParams()
    const [assessment, setAssessment] = useState({})
    const [kata, setKata] = useState('')
  const [results, setResults] = useState([]);
  // const [testResult, setTestResult] = useState('')
   const [remainingTime, setRemainingTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

    const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
      setCode(value);
    }, []);
 

    useEffect(() => {
     fetch(`https://hackerank.onrender.com/assessments/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
        }
    })
    .then(response => response.json())
    .then(response => {
        setAssessment(response)
    })

    }, [id])
function handleClick(id) {
  fetch(`https://hackerank.onrender.com/katas/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
    }
  })
    .then(response => response.json())
    .then(response => {
      setKata(response)
      setCode(response.starter_code);
      
    })
}
  
  
function runTests(kata, code) {
  try {
    const tests = kata.tests;
    const results = [];
    let passedTestsCount = 0;
    for (let i = 0; i < tests.length; i++) {
      const input = tests[i].input;
      const expectedOutput = tests[i].output;
      const testFn = new Function('code', 'input', `return ${code}(${JSON.stringify(input)})`);
      const userOutput = testFn(code, input);
      const testPassed = expectedOutput === userOutput;
      results.push({ input, expectedOutput, userOutput, testPassed });
      if (testPassed) {
        passedTestsCount++;
      }
    }
    setResults(results)
    const totalTestsCount = tests.length;
    const passedTestsResult = `Passed ${passedTestsCount} out of ${totalTestsCount}`;
    const percentage = ((passedTestsCount / totalTestsCount) * 100).toFixed(2);
    const testResult = { passedTestsResult, percentage };
    return testResult;
  } catch (error) {
    console.error(error);
    return { passedTestsResult: 'Error running tests', percentage: 0 };
  }
}


function submitCode() {
  const user_id = sessionStorage.getItem('userId');
  const assessment_id = assessment.id;
  const kata_id = kata.id;
  const testResult = runTests(kata, code);
  const percentage = testResult.percentage;
  const passedTestsResult = testResult.passedTestsResult;

  // Check if a similar submission exists for the current user, assessment, and kata
  fetch(`https://hackerank.onrender.com/check?user_id=${user_id}&assessment_id=${assessment_id}&kata_id=${kata_id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.exists) {
        window.alert('You have already submitted a solution for this kata.');
      } else {
        // Submit the code
        fetch(`https://hackerank.onrender.com/submissions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
          },
          body: JSON.stringify({
            user_id,
            assessment_id,
            kata_id,
            code,
            percentage,
            result: passedTestsResult
          }),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            window.alert('Submission successful!');
            window.location.href = `/submissions/${assessment.id}`;
          })
          .catch(error => {
            window.alert('Submission failed. Please try again.');
            console.error('Error:', error);
          });
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function submitCode() {
  const user_id = sessionStorage.getItem('userId');
  const assessment_id = assessment.id;
  const kata_id = kata.id;
  const testResult = runTests(kata, code);
  const percentage = testResult.percentage;
  const passedTestsResult = testResult.passedTestsResult;

// Check if a similar submission exists for the current user, assessment, and kata
fetch(`https://hackerank.onrender.com/check?user_id=${user_id}&assessment_id=${assessment_id}&kata_id=${kata_id}`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.exists) {
      window.alert('You have already submitted a solution for this kata.');
    } else {
      // Submit the code
      fetch(`https://hackerank.onrender.com/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
        },
        body: JSON.stringify({
          user_id,
          assessment_id,
          kata_id,
          code,
          percentage,
          result: passedTestsResult
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
     .then(data => {
  window.alert('Submission successful!');
  const currentKataIndex = assessment.katas.findIndex(kata => kata.id === kata_id);
  if (currentKataIndex === assessment.katas.length - 1) {
    window.alert('Congratulations, you have completed all the katas!');
  window.location.href = `/submissions/${assessment.id}`;
  } else {
    const nextKataIndex = currentKataIndex + 1;
    const nextKataId = assessment.katas[nextKataIndex].id;
    window.alert('Submission successful! Proceeding to the next kata.');
    
  }
})
.catch(error => {
  window.alert('Submission failed. Please try again.');
  console.error('Error:', error);
});

    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Submit all unsubmitted katas when the timer is 0
  if (assessment.timer === 0) {
    const katas = assessment.katas;
    katas.forEach((kata) => {
      fetch(`https://hackerank.onrender.com/check?user_id=${user_id}&assessment_id=${assessment_id}&kata_id=${kata.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (!data.exists) {
            const testResult = runTests(kata, code);
            const percentage = testResult.percentage;
            const passedTestsResult = testResult.passedTestsResult;
            fetch(`https://hackerank.onrender.com/submissions`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
              },
              body: JSON.stringify({
                user_id,
                assessment_id,
                kata_id: kata.id,
                code,
                percentage,
                result: passedTestsResult
              }),
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {
                console.log('Submission successful for kata ' + kata.id);
              })
              .catch(error => {
                console.error('Error:', error);
              });
          } else {
            window.alert('You have already submitted a solution for this kata.');
          }
        })
    });
  }
}






useEffect(() => {
  let intervalId;

  if (isStarted && remainingTime > 0) {
    const interval = setInterval(() => {
      setRemainingTime(prev => prev - 1);
    }, 1000);
    setIntervalId(interval);
    intervalId = interval;
  } else if (isStarted && remainingTime === 0) {
    clearInterval(intervalId);
    setIntervalId(null);
    submitCode();
  }

  return () => {
    clearInterval(intervalId);
  }
}, [isStarted, remainingTime]);

function startTimer() {
  setIsStarted(true);
  setRemainingTime(assessment.duration ); // convert minutes to seconds
}


const minutes = Math.floor(remainingTime / 60); // convert seconds to minutes
const seconds = remainingTime % 60;
const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className='min-h-screen items-center mt-[10vh]' style={{ minHeight: '100vh' }}>
{!isStarted && (
 
    <button
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#077407] text-white px-6 py-3 font-bold rounded-lg"
      onClick={startTimer}
    >
      Start assessment <br/>Time: {assessment.duration} minutes
    </button>
   
  )}

      {isStarted && (
        
        <div className="mx-auto sm:px-6 lg:px-8">
           <p className='text-[#077407] font-bold flex mt-[11vh] my-2 text-xl'>Remaining Time:<span className='text-red-600 bg-gray-200 rounded-full px-4 py-1 ml-3'> {formattedTime}</span></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 mt-10 mb-6 bg-gray-100 text-white rounded-lg">
              <div >
               <p className='text-2xl font-bold text-black '>{assessment.title}  </p>    <div className="my-2 text-xl">

              </div>
              </div>
              <div className="ml-5">
                {assessment.katas &&
                  assessment.katas.map((kata, index) => (
                    <div key={index}>
                      <button className="text-blue-900 font-bold" onClick={() => handleClick(kata.id)}>
                        {kata.name}
                      </button>
                    </div>
                  ))}
                <div className="my-2 text-black">
                  <p>{kata.description}</p>
                </div>
                <div className="my-2 text-white">
                  {/* <p>Remaining Time: {Math.floor(remainingTime / 60)}:{remainingTime % 60}</p> */}
                </div>
              </div>
            </div>
            <div className="p-4 mt-10 mb-6 mx-6  bg-slate-700 flex justify-center rounded-lg">
              <div className="w-full max-w-full h-full">
                <CodeMirror
                  value={code}
                  height="auto"
                  theme={okaidia}
                  autoCloseTags="true"
                  extensions={[javascript({ jsx: true })]}
                  onChange={onChange}
                />
                <button className="bg-[#077407] text-white p-2 m-2 rounded-lg" onClick={() => runTests(kata, code)}>
                  Run tests
                </button>
                <button className="bg-[#077407] max-w-sm m-2 p-2 text-white rounded-lg" onClick={submitCode}>
                  Submit
                </button>
                <div>
                  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                      <tr className='bg-[#f2f2f2] '>
                        <th style={{  borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Test Case #</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Input</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Expected Output</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Gotten Output</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Test Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results && results.map((result, index) => (
                        <tr key={index} className="text-white">
                          <td style={{ borderBottom: '1px solid #ddd', padding: '2px', textAlign: 'left' }}>{index + 1}</td>
                          <td style={{ borderBottom: '1px solid #ddd', padding: '0px', textAlign: 'left' }}>{JSON.stringify(result.input)}</td>
                          <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{JSON.stringify(result.expectedOutput)}</td>
                          <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{JSON.stringify(result.userOutput)}</td>
                          <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left', color: result.testPassed ? 'green' : 'red' }}>{result.testPassed ? 'Passed' : 'Failed'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>





              </div>
            </div>
          </div>
        </div>
      )}
        </div>
    )
}

export default ViewKata;

