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


            console.log(response)
        })
    }
  console.log(kata.tests)
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

function validBraces(braces) {
  const stack = [];
  const openBraces = ['(', '{', '['];
  const closeBraces = [')', '}', ']'];
  for (let i = 0; i < braces.length; i++) {
    if (openBraces.includes(braces[i])) {
      stack.push(braces[i]);
    } else if (closeBraces.includes(braces[i])) {
      const index = closeBraces.indexOf(braces[i]);
      if (stack.length === 0 || stack[stack.length - 1] !== openBraces[index]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

function runTests(kata, code) {
  try {
    const tests = kata?.tests;
    let codeWithSortByLength = '';
    if (kata?.slug === 'sort-array-by-string-length') {
      codeWithSortByLength = kata.starter_code + '\n' + code;
    } else if (kata.slug === 'valid-braces') {
      codeWithSortByLength = kata.starter_code.replace('function validBraces', 'function sortByLength') + '\n' + code;
    }
    const sortByLengthMatch = codeWithSortByLength.match(/function\s+sortByLength\s*\(\s*arr\s*\)\s*{\s*([\s\S]*)\s*}/);
    if (sortByLengthMatch) {
      const sortByLengthFn = sortByLengthMatch[0];
      eval(sortByLengthFn);
    }
    for (let i = 0; tests && i < tests.length; i++) {
      const test = tests[i];
      let expectedOutput = '';
      let actualOutput = '';
      if (kata?.slug === 'sort-array-by-string-length') {
        expectedOutput = JSON.stringify(test.output);
        actualOutput = JSON.stringify(sortByLength(test.input));
      } else if (kata?.slug === 'valid-braces') {
        expectedOutput = JSON.stringify(test.output);
        actualOutput = JSON.stringify(validBraces(test.input));
      }
      if (expectedOutput === actualOutput) {
        console.log(`Test ${i + 1} passed`);
      } else {
        console.log(`Test ${i + 1} failed`);
        console.log(`Expected output: ${expectedOutput}`);
        console.log(`Actual output: ${actualOutput}`);
      }
    }
  } catch (error) {
    console.error(error.toString());
  }
}









    function submitCode() {
        // console.log(code)
        // try {
        //     const result = eval(code);
        //     setOutput(result.toString());
           
        // } catch (error) {
        //     setOutput(error.toString());
        // }
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
<button className='bg-green-500 text-white p-2 m-2' onClick={() => runTests(kata, code)}>Run tests</button>
    <button className='bg-green-500 max-w-sm m-2 p-2 text-white ' onClick={submitCode}>Submit</button>
    <div className='text-white'>{output}</div>
  </div>
</div>




        </div>
    )
}

export default ViewKata;
