import React from 'react'
// import {FaJava, FaPython, FaDatabase} from 'react-icons/fa'
// import {BsFiletypeSql, BsRegex} from 'react-icons/bs'
// import {SiRuby} from 'react-icons/si'
// import {TbMath} from 'react-icons/tb'
// import {GiArtificialIntelligence} from 'react-icons/gi'


const DashBoard = () => {
  return (
    // <>
    // <div className=' ml-3 mt-12 min-h-[100vh]'>
    //     <div className='bg-blue-600'>
    //         <div className='ml-6 py-6 '>
    //             <h1 className='text-xl text-white font-medium'>Welcome Page</h1>
    //             <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    //             <div className='mt-2'><span className='text-white font-medium'>When is your interview?</span><button className='bg-blue-500 rounded py-1 px-3 ml-2'>in 3 months</button>
    //             </div>
    //         </div>
    //     </div>


    //     <div className=''>
    //         <h1 className='ml-6 mt-6 '>We recommend</h1>
    //         <div className='mr-9 ml-9 ml-6 mt-6 py-12 bg-gray-500 rounded border md:box-content mt-3'>
    //             <div className='ml-5 gap-96 flex justfy-between items-center'>

    //                     <a href="#" class="block flex-grow max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    //                         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Notewor1</h5>
    //                         <p class="font-normal text-gray-700 dark:text-gray-400"></p>
    //                     </a>

                        
    //                     <button className='bg-green-600 px-4 rounded mt-3 py-1 flex'>Start Preparation</button>

                       
    //             </div>
    //         </div>
    //     </div>


    //     <div className=''>
    //         <h1 className='ml-6 mt-6 '>Or Select a Topics</h1>
    //         <div className='mr-20'>
    //             <table className="ml-7 mt-4 table-auto w-full rounded mb-6 mr-7 border-gray-500">
                
    //             <tbody>
    //                 <tr>
    //                 <td className="border px-4 py-2"><FaJava size={30}/><span>Java</span></td>
    //                 <td className="border px-4 py-2"><FaPython size={30}/>Python</td>
    //                 <td className="border px-4 py-2"><FaDatabase size={30}/>Databases</td>
    //                 </tr>
    //                 <tr>
    //                 <td className="border px-4 py-2"><BsFiletypeSql size={30}/>SQL</td>
    //                 <td className="border px-4 py-2"><SiRuby size={30}/>RUBY</td>
    //                 <td className="border px-4 py-2"><TbMath/>MATHEMATICS</td>
    //                 </tr>
    //                 <tr>
    //                 <td className="border px-4 py-2"><BsRegex size={30}/>REGEX</td>
    //                 <td className="border px-4 py-2"><GiArtificialIntelligence size={30}/>ARTIFICIAL INTELLIGENCE</td>
    //                 <td className="border px-4 py-2">FUNCTIONAL PROGRAMMING</td>
    //                 </tr>
    //                 <tr>
    //                 <td className="border px-4 py-2">DATA STRUCTURES</td>
    //                 <td className="border px-4 py-2">C</td>
    //                 <td className="border px-4 py-2">C++</td>
    //                 </tr>
    //                 <tr>
    //                 <td className="border px-4 py-2"></td>
    //                 <td className="border px-4 py-2">Row 5, Column 2</td>
    //                 <td className="border px-4 py-2">Row 5, Column 3</td>
    //                 </tr>
    //             </tbody>
    //             </table>
    //         </div>
            

    //     </div>


    // </div>
    // </>

    <div className='mt-12 min-h-[100vh]'>
       <header class="theme-m bg-gradient-to-br from-[#11639c] via-[#097bbf] to-[#00ace0] text-white mt-[6vh]">
            <div class="container px-4">
                 <h1 class="text-3xl font-md py-4 ">Welcome <span class="text-white">minnie</span>!</h1>
                    <p class=" text-xs py-2 text-gray-300" >We are here to help you get your dream job. Let’s get started with your interview preparation.</p>
                    <p class=" py-2"><span class="font-bold text-xs">When is your interview?</span>
                        <div data-event-label="OpenInterviewDropdown" data-event-category="HRC Interview Prep" data-cd-interview-time="one_week" data-click-event-enabled="true" class="inline-block relative ml-2">
                            <select class="custom-select prep-time-select appearance-none bg-gradient-to-br from-[#11639c] via-[#097bbf] to-[#00ace0] border border-white hover:border-black px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black">
                                <option value="one_week">In a week</option>
                                <option value="two_weeks">In two weeks</option>
                                <option value="three_weeks">In three weeks</option>
                            </select>
                             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                             <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.29289 13.2929C9.68342 13.6834 10.3166 13.6834 10.7071 13.2929L14.7071 9.29289C15.0976 8.90237 15.0976 8.2692 14.7071 7.87868C14.3166 7.48815 13.6834 7.48815 13.2929 7.87868L10 11.1716L6.70711 7.87868C6.31658 7.48815 5.68342 7.48815 5.29289 7.87868C4.90237 8.2692 4.90237 8.90237 5.29289 9.29289L9.29289 13.2929Z" /></svg>
                            </div>
                         </div>
                    </p>
            </div>
        </header>
        <section class="bg-white rounded-lg mb-10 ">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold">We recommend</h2>
                <a href="#" class="text-[#077407] hover:underline">View all</a>
            </div>
            <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-screen-lg mx-auto bg-gray-100 rounded-lg p-6 flex items-center">
                <div className='mt-6 '>
                    <img src="https://hrcdn.net/fcore/assets/dashboard/lady_practicing-1add890f1f.svg" alt="" class="w-40 h-40 mx-auto mb-4"/>
                </div>
                <div class="">
                    
                    <h3 class="text-lg font-bold mb-2">1 Week Preparation Kit</h3>
                    <div class="text-sm text-gray-700 mb-2">
                        <span>Challenges: </span>
                        <span class="font-bold">21</span>
                        <span>, Mock Tests: </span>
                        <span class="font-bold">6</span>
                        <span>, Attempts: </span>
                        <span class="font-bold">590206</span>
                     </div>
                     <div class="flex flex-wrap mb-2">
                         <a href="#" class="mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-300 hover:text-gray-600">Problem Solving (Basic)</a>
                         <a href="#" class="mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-300 hover:text-gray-600">Problem Solving (Intermediate)</a>
                        <a href="#" class="mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-300 hover:text-gray-600">+1 more</a>
                     </div>
                         <p class="text-xs text-gray-700 mb-3">This Interview Preparation Kit has challenges curated by our experts for you to prepare and ace your interview in a week's time.</p>
                        
                 </div>
                 <div className='mt-10 ml-9 '>
                    <a href="#" class="mt-4 px-4 py-2 bg-[#077407] text-white rounded-lg font-medium hover:bg-[#077407] hover:text-white ">Start Preparation</a>
                </div>
                 
            </div>
        </section>
        <section class="py-12 mb-10 mt-10">
            <div class="container mx-auto ">
                <div class="text-left">
                  <h2 class="text-3xl font-bold ">Or select a Topic</h2>
                </div>
                 <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-8 flex items-center">
                      <a href="/algorithms" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                          <div class="flex items-center">
                             <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/Algorithm.svg" alt="Algorithms icon" class="w-8 h-8 mr-4"/>
                                <div class="text-lg font-bold">Algorithms</div>
                          </div>
                      </a>
                      <a href="/data-structures" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                           <div class="flex items-center">
                              <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/DataStructure.svg" alt="Data Structures icon" class="w-8 h-8 mr-4"/>
                               <div class="text-lg font-bold">Data Structures</div>
                            </div>
                      </a>
                      <a href="/mathematics" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                          <div class="flex items-center">
                              <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/Mathematics.svg" alt="Mathematics icon" class="w-8 h-8 mr-4"/>
                              <div class="text-lg font-bold">Mathematics</div>
                          </div>
                      </a>
                      <a href="/ai" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                            <div class="flex items-center">
                                 <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/AI.svg" alt="Artificial Intelligence icon" class="w-8 h-8 mr-4"/>
                                 <div class="text-lg font-bold">Artificial Intelligence</div>
                            </div>
                      </a>
                      <a href="/c" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                             <div class="flex items-center">
                                   <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/C.svg" alt="C icon" class="w-8 h-8 mr-4"/>
                                   <div class="text-lg font-bold">C</div>
                              </div>
                       </a>
                       <a href="/cpp" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                              <div class="flex items-center">
                                  <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/C++.svg" alt="C++ icon" class="w-8 h-8 mr-4"/>
                                   <div class="text-lg font-bold">C++</div>
                              </div>
                        </a>
                        <a href="/java" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                              <div class="flex items-center">
                                   <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/Java.svg" alt="" class="w-6 h-6"/>
                                   <div class="text-lg font-bold">Java</div>
                              </div>
                         </a>
                        <a href="/python" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                              <div class="flex items-center">
                                     <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/Python.svg" alt="" class="w-6 h-6"/>
                                    <div class="text-lg font-bold">Python</div>
                               </div>
                        </a>
                         <a href="/ruby" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                               <div class="flex items-center">
                                    <img src="https://hrcdn.net/s3_pub/hr-assets/dashboard/Ruby.svg" alt="" class="w-6 h-6"/>
                                    <div class="text-lg font-bold">Ruby</div>
                               </div>
                          </a>

                  
                   </div>
          </div>
        </section>
      
            <div class="grid grid-cols-1 sm:grid-cols-2  gap-2 bg-white rounded-lg shadow-lg lg:p-6 mx-auto max-w-screen-lg mb-10 theme-m bg-gradient-to-br from-[#11639c] via-[#097bbf] to-[#00ace0]">
                    <div class=" p-6">
                        <div class="flex items-center mb-4">
                            
                                <h3 class="text-lg font-semibold text-white"> NEW <br/>Create a Job Winning Resume</h3>
                        </div>
                            <p class="text-white mb-10">Boost your chances of landing that dream job by building fine-tuned resumes that stand out.</p>
                            <div class="mt-10">
                                <a href="#" class="bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">Create a Resume</a>
                            </div>
                            
                            
                    </div>
                    <div class='mt-10'>
                        <img alt="hackerresume-card" class="hackerresume-img" src="https://hrcdn.net/fcore/assets/dashboard/hackerresume-card-dd9b01fcd2.svg"/>
                    </div>
      
             </div>
      

      

        
    </div>














































  )
}

export default DashBoard