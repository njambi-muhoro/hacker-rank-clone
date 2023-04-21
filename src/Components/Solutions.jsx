import React from 'react'

function Solutions() {
    return (
        <div>
          <div>
            <header>
              <div className="mb-10 text-center  text-4xl mt-40">
              HackerRank Projects
                
              </div>
            </header>
           
    
            <p className="text-center font-medium text-xl text-gray-500">
            Real–world scenarios for your most technical hires
            </p>

            <p className="text-center font-medium text-xl text-gray-500">
            Assess role-specific skills with full access to complete application environments
            </p>

            <div className="flex justify-center gap-4 mt-10">
            <button
              type="button"
              className="px-9 py-2.5 mr-2 mb-2 text-sm font-medium bg-green-600 text-white rounded-md"
            >{" "}
              Request Demo
              {" "}
            </button>
            </div>
          </div>
         <div className="px-20 py-4">
         <div className="mt-10 mb-10 p-4 lg:p-6 max-w-screen-lg mx-auto">
                <img src="https://www.hackerrank.com/wp-content/uploads/bb-plugin/cache/Projects-bannerimage-panorama.jpg" alt=""/>
            </div>
            </div>
    
          
        </div>
      );
    }
export default Solutions;
