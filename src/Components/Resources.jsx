import React from "react";

function Resources() {
  return (
    <div>
      <header className="mb-10 text-center font-bold text-4xl mt-40">
        HackerRank Integrations
      </header>

      <p className="text-center font-medium text-xl text-gray-500">
        Featuring 40+ integrations, HackerRank seamlessly connects with your
        favorite tools.
      </p>

      <div className="flex justify-center gap-4 mt-10">
        <button
          type="button"
          className="px-9 py-2.5 mr-2 mb-2 text-sm font-medium bg-[#077407] text-white rounded-md"
        >
          Request Demo
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-10 mb-5">
        <a
          
          className="flex-shrink-0 border-t-8 block max-w-sm p-6 bg-white border-green-500 shadow hover:bg-[#EAF3F8] dark:bg-[#EAF3F9] dark:border-gray-700 dark:hover:bg-[#EAF3F9]"
        >
          <h5 className="mb-9 text-3xl text-center font-bold tracking-tight text-green-500 dark:text-white">
            Applicant
            Tracking Systems
          </h5>
          <p className="font-normal text-xl text-gray-600 ">
            Embed HackerRank into 
            your recruiting process by accessing HackerRank 
            Tests and Interviews from 
            your ATS.
          </p>
        </a>

        <a
          class="flex-shrink-0 block max-w-sm p-6 bg-white border-t-8 border-blue-400 shadow hover:bg-[#EAF3F8] dark:bg-[#EAF3F9] dark:border-gray-700 dark:hover:bg-[#EAF3F9]"
        >
          <h5 class="mb-9 text-3xl text-center font-bold tracking-tight text-blue-400 dark:text-white ">
            Talent Intelligence
          </h5>
          <p class="font-normal text-xl text-gray-600">
            Manage talent from one convenient <br />
            location by assessing and <br />
            interviewing candidates within your
            <br /> talent automation or intelligence <br />
            platform..
          </p>
        </a>

        <a
          
          class="flex-shrink-0 block max-w-sm p-6 bg-white border-t-8 border-green-500 shadow hover:bg-[#EAF3F8] dark:bg-[#EAF3F9] dark:border-gray-700 dark:hover:bg-[#EAF3F9]"
        >
          <h5 class="mb-9 text-3xl text-center font-bold tracking-tight text-green-500 dark:text-white">
            Scheduling &amp; Productivity
          </h5>
          <p class="text-xl text-gray-600">
            Automate your processes by connecting HackerRank to your favorite
            productivity tools – including scheduling tools!.
          </p>
        </a>
      </div>

      <div className="bg-gray mt-40 mb-40 rounded-md shadow-lg p-8">
        <div className="text-center mb-6 font-bold text-gray-600 text-xl">
          Types of Integrations
        </div>
        <div className="text-center text-gray-600 text-sm">
          Applicant Tracking Systems | Talent Intelligence | Scheduling &
          Productivity
        </div>
      </div>
    </div>
  );
}

export default Resources;
