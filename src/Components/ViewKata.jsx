import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
// import CodeEditor from './CodeEditor';

function ViewKata() {
    const [code, setCode] = useState('const a= 0')
    const { id } = useParams()
    const [assessment, setAssessment] = useState({})
    const[kata,setKata] = useState('')
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
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
            console.log(response)
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
            console.log(response)
        })
 }
    
    
    function submitCode() {
        console.log(code)
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
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
    <div className='border-2 bg-green-500 max-w-sm' onClick={submitCode}>Submit</div>
  </div>
</div>



        </div>
    )
}

export default ViewKata;
