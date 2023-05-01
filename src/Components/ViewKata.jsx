import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';


function ViewKata() {
    const [code, setCode] = useState('')
    const { id } = useParams()
    const [remainingTime, setRemainingTime] = useState(0);

    const [intervalId, setIntervalId] = useState(null);
    const [submitClicked, setSubmitClicked] = useState(false);

    
    useEffect(() => {
      if (!submitClicked && remainingTime > 0) {
        const interval = setInterval(() => {
          setRemainingTime(prev => {
            if (prev === 1) {
              clearInterval(interval);
              return 0;
            } else if (prev > 1) {
              return prev - 1;
            } else {
              return prev;
            }
          });
        }, 1000);
        setIntervalId(interval);
      }
      return () => {
        clearInterval(intervalId);
      };
    }, [submitClicked, remainingTime]);
    
  //    useEffect(() => {
  //   if (!submitClicked && remainingTime > 0) {
  //     const interval = setInterval(() => {
  //       setRemainingTime(prev => {
  //         if (prev === 1) {
  //           clearInterval(interval);
  //           if (!submitClicked) { // check if submit button is not clicked
  //             submitCode(); // call submitCode function
  //           }
  //           return 0;
  //         } else if (prev > 1) {
  //           return prev - 1;
  //         } else {
  //           return prev;
  //         }
  //       });
  //     }, 1000);
  //     setIntervalId(interval);
  //   }
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [submitClicked, remainingTime]);

    const [assessment, setAssessment] = useState({})
    const [kata, setKata] = useState('')
    const [output, setOutput] = useState('')
    const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
      setCode(value);
    }, []);
 

    useEffect(() => {
       const duration = parseInt(assessment.duration);
        setRemainingTime(duration * 60);
     fetch(`http://localhost:4500/assessments/${id}`, {
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

    }, [assessment.duration])
    

function handleClick(id) {
 
  fetch(`http://localhost:4500/katas/${id}`, {
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
  
  //   const testFn = new Function('code', 'input', `return ${code}(${JSON.stringify(input)});`);
 // const userOutput = testFn(code, input);
 function runTests(kata, code) {
  try {
    const tests = kata.tests;
    let allTestsPassed = true;
    for (let i = 0; i < tests.length; i++) {
      const input = tests[i].input;
      const expectedOutput = tests[i].output;
      const testFn = new Function('code', 'input', `return ${code}(${JSON.stringify(input)});`);
      const userOutput = testFn(code, input);
      if (expectedOutput !== userOutput) {
        console.log(`Test ${i + 1} failed. Expected output: ${expectedOutput}. Got output: ${userOutput}`);
        allTestsPassed = false;
      } else {
        console.log(`Test ${i + 1} passed!`);
      }
    }

    if (allTestsPassed) {
      console.log('All tests passed!');
    }

    return allTestsPassed;
  } catch (error) {
    console.error(error);
    return false;
  }
}


  
function submitCode() {
  setSubmitClicked(true);

  const user_id = sessionStorage.getItem('userId');
  const assessment_id = assessment.id;
  const kata_id = kata.id;
  const result = runTests(); // pass kata and code as arguments
  console.log(user_id, assessment_id, kata_id, code, result);
  fetch('http://localhost:4500/student_kata_attempts', {
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
  .then(data => {
      console.log(data);
      // document.location.reload();
  })
  .catch(error => console.error(error));
}



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="p-4 mt-32 mb-6 mx-6 bg-slate-900 text-white">
                <div>
                    <h2 className="">{assessment.title}</h2>
                    <h>{assessment.duration}</h>
                    <div className="ml-5">
                        {assessment.katas && assessment.katas.map((kata, index) => {
                            return (
                                <div key={index}>
                                    <button  className='text-white' onClick={()=>handleClick(kata.id)}>{kata.name}</button>
                                </div>
                            )
                        })

                        }
                        <div style={{color:"red", fontSize:"30px"}} className="text-white">{Math.floor(remainingTime / 60)}:{remainingTime % 60}</div>
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
