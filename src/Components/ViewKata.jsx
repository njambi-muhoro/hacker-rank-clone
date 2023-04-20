import { useState, useEffect } from "react";
import React from "react"
import { useParams } from "react-router-dom";

function ViewKata() {

    const { kata_id } = useParams()
    
    const [kata, setkata] = useState({})



    useEffect(() => {
        fetch(`http://localhost:3000/katas/${kata_id}`)
        .then(response => response.json())
        .then(res => {
            setkata(res)
        })
    }, [])

    return (
        <>
        { kata.name &&
        <div className="p-4 mt-32 mb-6 mx-6 p-2  bg-slate-900 text-white">
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
        </>
    )
}

export default ViewKata