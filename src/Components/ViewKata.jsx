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
  const [output, setOutput] = useState('')
  const [results, setResults] = useState([]);
  const [testResult, setTestResult] = useState('')

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
      const testFn = new Function('code', 'input', `return ${code}(${JSON.stringify(input)});`);
      const userOutput = testFn(code, input);
      const testPassed = expectedOutput === userOutput;
      // results.push({ input, expectedOutput, userOutput, testPassed });
      if (testPassed) {
        passedTestsCount++;
      }
    }

    const percentage = tests.length === passedTestsCount ? 100 : Math.round((passedTestsCount / tests.length) * 100);
    const result = (`Passed ${passedTestsCount} out of ${tests.length} tests. Result: ${percentage}%`);
    // console.log(`Passed ${passedTestsCount} out of ${tests.length} tests. Result: ${percentage}%`);
    setTestResult(result)
    setResults(results);
    console.log(testResult)

    return percentage;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

  
 function submitCode() {
  const user_id = sessionStorage.getItem('userId'); // function to get the current user ID
  const assessment_id = assessment.id; // function to get the current assessment ID
  const kata_id = kata.id; // function to get the current kata ID
   const testResult = runTests(); // function to run the tests and get the result
   const result = testResult
console.log( user_id,
      assessment_id,
      kata_id,
      code,
      result,)
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
      result
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

  //  const [remainingTime, setRemainingTime] = useState(assessment.duration * 60);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setRemainingTime((prevTime) => prevTime - 1);
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

    return (
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-4 mt-32 mb-6 mx-6 bg-slate-900 text-white">
        <h2>
          {assessment.title} : {assessment.duration} minutes
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
    {/* {results && results.map((result, index) => (
      <tr key={index}>
        <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{index + 1}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{JSON.stringify(result.input)}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{JSON.stringify(result.expectedOutput)}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{JSON.stringify(result.userOutput)}</td>
        <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left', color: result.testPassed ? 'green' : 'red' }}>{result.testPassed ? 'Passed' : 'Failed'}</td>
      </tr>
    ))} */}
  </tbody>
</table>

</div>





        </div>
      </div>
    </div>
    )
}

export default ViewKata;
