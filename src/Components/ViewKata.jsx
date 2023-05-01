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
  const [testResult, setTestResult] = useState('')
   const [remainingTime, setRemainingTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

    const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
      setCode(value);
    }, []);
 

    useEffect(() => {
     fetch(`http://localhost:3000/assessments/${id}`, {
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
  fetch(`http://localhost:3000/katas/${id}`, {
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


  
function checkIfKataSubmitted(user_id, assessment_id, kata_id) {
  return fetch(`http://localhost:3000/submissions?user_id=${user_id}&assessment_id=${assessment_id}&kata_id=${kata_id}`, {
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
  .then(data => data.length > 0)
  .catch(error => {
    console.error('Error:', error);
    return false;
  });
}

function submitCode() {
  const user_id = sessionStorage.getItem('userId'); // function to get the current user ID
  const assessment_id = assessment.id; // function to get the current assessment ID
  const kata_id = kata.id; // function to get the current kata ID
  const testResult = runTests(kata, code); // function to run the tests and get the result

  const percentage = testResult.percentage;
  const passedTestsResult = testResult.passedTestsResult;

  // check if timer is zero
  if (assessment.timer === 0) {
    const katas = assessment.katas; // get all the katas in the assessment
    katas.forEach((kata) => {
      const isSubmitted = checkIfKataSubmitted(user_id, assessment_id, kata.id); // function to check if kata is submitted
      if (!isSubmitted) {
        const testResult = runTests(kata, code); // run tests for the current kata
        const percentage = testResult.percentage;
        const passedTestsResult = testResult.passedTestsResult;
        // submit the code for the current kata
        fetch('http://localhost:3000/submissions', {
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
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
      }
    });
  } else { // if timer is not zero, submit the code for the current kata only
    const isSubmitted = checkIfKataSubmitted(user_id, assessment_id, kata_id); // function to check if kata is submitted
    if (!isSubmitted) {
      fetch('http://localhost:3000/submissions', {
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
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    }
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
  setRemainingTime(assessment.duration * 60); // convert minutes to seconds
}


const minutes = Math.floor(remainingTime / 60); // convert seconds to minutes
const seconds = remainingTime % 60;
const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className='min-h-screen bg-gray-100 items-center mt-[10vh]' style={{ minHeight: '100vh' }}>
{!isStarted && (
    <button
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 font-bold"
      onClick={startTimer}
    >
      Start assessment <br/>Time: {assessment.duration} minutes
    </button>
  )}

      {isStarted && (
        <div className="lg:max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 mt-32 mb-6  bg-slate-900 text-white">
              <h2>
                {assessment.title} :   <div className="my-2 text-white">
                <p>Remaining Time: {formattedTime}</p>
              </div>
              </h2>
              <div className="ml-5">
                {assessment.katas &&
                  assessment.katas.map((kata, index) => (
                    <div key={index}>
                      <button className="text-white" onClick={() => handleClick(kata.id)}>
                        {kata.name}
                      </button>
                    </div>
                  ))}
                <div className="my-2 text-white">
                  <p>{kata.description}</p>
                </div>
                <div className="my-2 text-white">
                  {/* <p>Remaining Time: {Math.floor(remainingTime / 60)}:{remainingTime % 60}</p> */}
                </div>
              </div>
            </div>
            <div className="p-4 mt-32 mb-6 mx-6  bg-slate-900 flex justify-center">
              <div className="w-full max-w-full h-full">
                <CodeMirror
                  value={code}
                  height="auto"
                  theme={okaidia}
                  autoCloseTags="true"
                  extensions={[javascript({ jsx: true })]}
                  onChange={onChange}
                />
                <button className="bg-green-500 text-white p-2 m-2" onClick={() => runTests(kata, code)}>
                  Run tests
                </button>
                <button className="bg-green-500 max-w-sm m-2 p-2 text-white " onClick={submitCode}>
                  Submit
                </button>
                <div>
                  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                      <tr>
                        <th style={{ backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Test Case #</th>
                        <th style={{ backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Input</th>
                        <th style={{ backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Expected Output</th>
                        <th style={{ backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Gotten Output</th>
                        <th style={{ backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Test Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results && results.map((result, index) => (
                        <tr key={index}>
                          <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{index + 1}</td>
                          <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{JSON.stringify(result.input)}</td>
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

