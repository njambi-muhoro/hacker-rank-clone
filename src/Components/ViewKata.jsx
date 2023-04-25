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
      const kataObject = {
        tests: response.tests,
        starter_code: response.starter_code
      };
      console.log(response)
      
    })
}
function runTests() {
  try {
    const tests = kata.tests;
    let allTestsPassed = true;
    for (let i = 0; i < tests.length; i++) {
      const input = tests[i].input;
      const expectedOutput = tests[i].output;
      const userOutput = eval(`${code}(${JSON.stringify(input)})`);
      console.log(`Test ${i + 1} input: ${JSON.stringify(input)}`);
      console.log(`Test ${i + 1} expected output: ${JSON.stringify(expectedOutput)}`);
      console.log(`Test ${i + 1} user output: ${JSON.stringify(userOutput)}`);
      if (JSON.stringify(expectedOutput) !== JSON.stringify(userOutput)) {
        console.log(`Test ${i + 1} failed. Expected output: ${JSON.stringify(expectedOutput)}. Got output: ${JSON.stringify(userOutput)}`);
        allTestsPassed = false;
      }
    }
    if (allTestsPassed) {
      console.log('All tests passed!');
    }
  } catch (error) {
    console.error(error);
  }
}
  
// function runTests() {
//   const tests = kata.tests;
//   let allTestsPassed = true;

//   for (let i = 0; i < tests.length; i++) {
//     const input = tests[i].input;
//     const expectedOutput = tests[i].output;
//     let userOutput;

//     try {
//       userOutput = eval(`${code}(${JSON.stringify(...input)})`);
//     } catch (error) {
//       console.error(`Test ${i + 1} failed. Expected output: ${JSON.stringify(expectedOutput)}. Got error: ${error}`);
//       allTestsPassed = false;
//       continue;
//     }

//     if (JSON.stringify(expectedOutput) !== JSON.stringify(userOutput)) {
//       console.error(`Test ${i + 1} failed. Expected output: ${JSON.stringify(expectedOutput)}. Got output: ${JSON.stringify(userOutput)}`);
//       allTestsPassed = false;
//     }
//   }

//   if (allTestsPassed) {
//     console.log('All tests passed!');
//   }
// }


// function runTests() {
//   const testResults = kata.tests.map((test) => {
//     try {
//       const result = eval(`${code};\n${test.input}`);
//       const passed = result === test.output;
//       return {
//         input: test.input,
//         expectedOutput: test.output,
//         actualOutput: result,
//         passed: passed,
//       };
//     } catch (error) {
//       return {
//         input: test.input,
//         expectedOutput: test.output,
//         actualOutput: error.toString(),
//         passed: false,
//       };
//     }
//   });
//   setOutput(JSON.stringify(testResults, null, 2));
// }



  
  function submitCode() {
  
}

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="p-4 mt-32 mb-6 mx-6 p-2 bg-slate-900 text-white">
                <h1 className="font-bold"></h1>
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

     <div className="p-4 mt-32 mb-6 mx-6 p-2 bg-slate-900 flex justify-center">
  <div className="w-full max-w-full h-full">
    <CodeMirror
      value={code}
      height="400px"
      theme={okaidia}
      autoCloseTags="true"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
<button className='bg-green-500 text-white p-2 m-2' onClick={runTests}>Run tests</button>
    <button className='bg-green-500 max-w-sm m-2 p-2 text-white ' onClick={submitCode}>Submit</button>
    <div className='text-white'>{output}</div>
  </div>
</div>




        </div>
    )
}

export default ViewKata;
