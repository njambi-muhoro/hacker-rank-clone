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
    let allTestsPassed = true;
    for (let i = 0; i < tests.length; i++) {
      const input = tests[i].input;
      console.log(input)
      const expectedOutput = tests[i].output;
      console.log(code)
      const userOutput = eval(`${code}(${JSON.stringify(input)})`);
      console.log(userOutput)
      console.log(expectedOutput)
      if (expectedOutput.toString() !== userOutput.toString()) {
        console.log(`Test ${i + 1} failed. Expected output: ${expectedOutput}. Got output: ${userOutput}`);
        allTestsPassed = false;
      } else {
        console.log(`Test ${i + 1} passed!`);
      }
    }

    if (allTestsPassed) {
      console.log('All tests passed!');
    }
  } catch (error) {
    console.error(error);
  }
}

  
 function submitCode() {
  const user_id = sessionStorage.getItem('userId'); // function to get the current user ID
  const assessment_id = assessment.id; // function to get the current assessment ID
  const kata_id = kata.id; // function to get the current kata ID
  const result = runTests(); // function to run the tests and get the result
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


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="p-4 mt-32 mb-6 mx-6 bg-slate-900 text-white">
                <div>
                    <h2 className="">{assessment.title}</h2>
                    <div className="ml-5">
                        {assessment.katas && assessment.katas.map((kata, index) => {
                            return (
                                <div key={index}>
                                    <button  className='text-white' onClick={()=>handleClick(kata.id)}>{kata.name}</button>
                                </div>
                            )
                        })

                        }
                                <div className="my-2 text-white">
                                    <p>{kata.description}</p>
                                </div>

                    </div>
                </div>
            </div>

     <div className="p-4 mt-32 mb-6 mx-6  bg-slate-900 flex justify-center">
  <div className="w-full max-w-full h-full">
    <CodeMirror
      value={code}
      height="400px"
      theme={okaidia}
      autoCloseTags="true"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
<button className='bg-green-500 text-white p-2 m-2' onClick={() => runTests(kata, code)}>Run tests</button>
    <button className='bg-green-500 max-w-sm m-2 p-2 text-white ' onClick={submitCode}>Submit</button>
    <div className='text-white'>{output}</div>
  </div>
</div>




        </div>
    )
}

export default ViewKata;
