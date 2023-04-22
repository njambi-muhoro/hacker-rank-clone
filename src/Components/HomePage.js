import React from "react"
import { useNavigate } from 'react-router-dom'



function HomePage(){
    const navigate = useNavigate()
    return(
    <div className="mt-[10vh] mb-[10vh]">
        <div className="bg-[#EAF3F9] p-6">
            <div className="lg:w-7xl">
                <div className="text-center font-bold font-serif text-6xl mt-10">
                    Skills Speak Louder <br />Than Words   
                </div>
            

            <div className="text-center text-xl text-gray-600 mt-10" >
                We help companies develop the strongest tech teams around. We help <br />
                candidates sharpen their tech skills and pursue job opportunities.
                
            </div>
            
            <div className="flex justify-center gap-4 mt-10">

                <button  onClick={() => navigate("/signup")} type="button" className="px-9 py-2.5 mr-2 mb-2 text-sm font-medium bg-[#077407] text-white rounded-md" >Sign Up</button>
                <button  onClick={() => navigate("/demo")} type="button" class="px-5 py-2.5 mr-2 mb-2 text-xs font-medium bg-[#D9D9D9] text-black border border-black rounded-md">

                 Request Demo
                </button>
            
            </div>

            </div>
        </div>
        <div className="bg-[#FBFBFF] p-10 ">
            <div className="lg:w-7xl">
                <div className="text-3xl flex justify-center">
                    It’s not a pipeline problem.
                </div>
                <div className="text-3xl text-[#008000] flex justify-center mt-4">
                    It’s a spotlight problem.
                </div>
            
            
                <div className="text-center text-sm text-gray-600 mt-10">
                    <p>
                        Tech hiring needs a reset. From prepping for jobs and practicing coding to running<br />
                        a world-class technical interview, give developers the tools they need to showcase<br />
                        their skills, passion, and potential.
                        </p>
                </div>

                <div className="bg-black lg:p-6 max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 rounded-lg mt-10">
                    <div className="text-white ml-9 mt-10 ">
                                <h6 className="text-xs mb-9">:: Coding practice ::</h6>
                                <h3 className="text-xl font-bold mb-4">Explore and expand your skills.</h3>
                            <div className="text-sm mb-7 text-gray-300">
                                <p>Every idea has a first line of code. Prep for jobs and </p>
                                <p>sharpen your skills alongside a global community</p>
                                <p>develop new skills – and land the job you’ve </p>
                                <p>dreamed of.</p>
                            </div>
                                <button type="button" class="px-5 py-2.5 mr-2 mb-2 text-xs font-medium bg-black text-white border border-white rounded-md">Sign up and practice
    
                                </button>
                    </div>
                    <div className="mt-8">
                        <img src="https://www.hackerrank.com/wp-content/uploads/2022/09/community.jpg" alt=""/>
                    </div>
                </div>
                
            </div>
        </div>
    <div className="lg:w-7xl p-10">
    
            <div className="text-3xl text-center ">
                Interview like it’s <span className="text-[#077407]">2023</span>
            </div>
            <div className="text-xm text-center sm:text-xs mt-10 md:px-8">
                Ditch out of reach and out of touch interview questions about golf balls and 747s — <br /> and turn off your clunky screen share for good. 
                Code, create, and collaborate with <br/>an IDE built to showcase real-world skills in a real-world environment.
            </div>
            <div className="flex justify-center mt-10">
            <button type="button" class="px-5 py-2.5 mr-2 mb-2 text-xs font-medium bg-[#077407] text-white border border-white rounded-md">Learn More
    
            </button>
            </div>
        

        
        <div className="flex items-center justify-center mt-10 max-w-screen-lg mx-auto lg:p-6 lg:w-7x flex-wrap ">
                <img src="https://marketinghr.wpengine.com/wp-content/uploads/2022/10/tool1.png" alt="Tool 1"  />
                <img src="https://marketinghr.wpengine.com/wp-content/uploads/2022/10/tool2.png" alt="Tool 2" />
                <img src="https://marketinghr.wpengine.com/wp-content/uploads/2022/10/tool3.png" alt="Tool 3" />
                <img src="https://marketinghr.wpengine.com/wp-content/uploads/2022/10/tool4.png" alt="Tool 4" />
                <img src="https://marketinghr.wpengine.com/wp-content/uploads/2022/10/tool5.png" alt="Tool 5" />
                <img src="https://marketinghr.wpengine.com/wp-content/uploads/2022/10/tool6.png" alt="Tool 6" />
                <img src="https://marketinghr.wpengine.com/wp-content/uploads/2022/10/tool7.png" alt="Tool 7" />
        </div>
        <div className="mt-10 mb-10 p-4 lg:p-6 max-w-screen-lg mx-auto">
            <img src="https://www.hackerrank.com/wp-content/uploads/2022/11/interview1.png" alt=""/>
        </div>
 
        <div class="flex justify-center p-4 sm:p-0">
            <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 gap-8 sm:p-6 sm:rounded-lg">
                <div className="rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 ">Practice coding challenges &amp; <span className="text-[#008000]">prep for interviews</span></h3>
                    <p className="text-lg mb-6">Start practicing your skills now and land the job of your dreams.</p>
      
                     <button type="button" className="px-9 py-2.5 mr-2 mb-2 text-sm font-medium bg-[#077407] text-white rounded-md" >Join the community</button>
                </div>
                <div className="md:bg-[#EAF3F9] rounded-lg p-6 ">
                    <h3 className="text-2xl font-bold mb-4">Get started <span className="text-[#008000]">hiring with HackerRank</span></h3>
                    <p className="text-lg mb-6">More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank</p>
      
                    <button type="button" className="px-9 py-2.5 mr-2 mb-2 text-sm font-medium bg-[#077407] text-white rounded-md" >Request a demo</button>
                </div>
            </div>
        </div>
    </div>

 </div>

    )
}export default HomePage;