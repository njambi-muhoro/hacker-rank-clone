import React from 'react';
import { useState, useEffect } from "react";
import React from "react"
import { useParams } from "react-router-dom";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import CodeEditor from './CodeEditor';

function ViewKata() {
    const [code, setCode] = useState('const a= 0')
    const { kata_id } = useParams()
    const [kata, setkata] = useState({})

    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3000/katas/${kata_id}`)
        .then(response => response.json())
        .then(res => {
            setkata(res)
        })
    }, [])

    function submitCode() {
        console.log(code)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            { kata.name &&
            <div className="p-4 mt-32 mb-6 mx-6 p-2 bg-slate-900 text-white">
                <h1 className="font-bold">{kata.name}</h1>
                <div>
                    <h2 className="">Description</h2>
                    <div className="ml-5">
                        {
                        kata.description.split(/[\n]+/).map((sentence, index) => {
                            return (
                                <div className="my-2" key={index}>
                                    {sentence==='```' ? <h3 className="text-red-600">{sentence}</h3> : 
                                    sentence.includes("#") === "#" ? <h3 className="text-yellow-400"></h3> : sentence }
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            }
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
