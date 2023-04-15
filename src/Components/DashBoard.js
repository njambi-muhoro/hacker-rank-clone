import React from 'react'
import {FaJava, FaPython, FaDatabase} from 'react-icons/fa'
import {BsFiletypeSql, BsRegex} from 'react-icons/bs'
import {SiRuby} from 'react-icons/si'
import {TbMath} from 'react-icons/tb'
import {GiArtificialIntelligence} from 'react-icons/gi'


const DashBoard = () => {
  return (
    <>
    <div className=' ml-3 mt-12 min-h-[100vh]'>
        <div className='bg-blue-600'>
            <div className='ml-6 py-6 '>
                <h1 className='text-xl text-white font-medium'>Welcome Page</h1>
                <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='mt-2'><span className='text-white font-medium'>When is your interview?</span><button className='bg-blue-500 rounded py-1 px-3 ml-2'>in 3 months</button>
                </div>
            </div>
        </div>

        <div className=''>
            <h1 className='ml-6 mt-6 '>We recommend</h1>
            <div className='mr-9 ml-9 ml-6 mt-6 py-12 bg-gray-500 rounded border md:box-content mt-3'>
                <div className='ml-5 gap-96 flex justify-between items-center'>

                        <a href="!#" class="block flex-grow max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Notewor1</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400"></p>
                        </a>
                        
                        <button className='bg-green-600 px-4 rounded mt-3 py-1 flex'>Start Preparation</button>

                       
                </div>
            </div>
        </div>


        <div className=''>
            <h1 className='ml-6 mt-6 '>Or Select a Topics</h1>
            <div className='mr-20'>
                <table className="ml-7 mt-4 table-auto w-full rounded mb-6 mr-7 border-gray-500">
                
                <tbody>
                    <tr>
                    <td className="border px-4 py-2"><FaJava size={30}/><span>Java</span></td>
                    <td className="border px-4 py-2"><FaPython size={30}/>Python</td>
                    <td className="border px-4 py-2"><FaDatabase size={30}/>Databases</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2"><BsFiletypeSql size={30}/>SQL</td>
                    <td className="border px-4 py-2"><SiRuby size={30}/>RUBY</td>
                    <td className="border px-4 py-2"><TbMath/>MATHEMATICS</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2"><BsRegex size={30}/>REGEX</td>
                    <td className="border px-4 py-2"><GiArtificialIntelligence size={30}/>ARTIFICIAL INTELLIGENCE</td>
                    <td className="border px-4 py-2">FUNCTIONAL PROGRAMMING</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2">DATA STRUCTURES</td>
                    <td className="border px-4 py-2">C</td>
                    <td className="border px-4 py-2">C++</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2"></td>
                    <td className="border px-4 py-2">Row 5, Column 2</td>
                    <td className="border px-4 py-2">Row 5, Column 3</td>
                    </tr>
                </tbody>
                </table>
            </div>
            

        </div>


    </div>
    </>

  )
}

export default DashBoard