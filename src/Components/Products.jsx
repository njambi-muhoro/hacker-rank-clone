import React from "react";

function Products() {
  return (
    <div>
      <div>
        <header>
          <div className="mb-10 text-center font-bold  text-gray-600 text-6xl mt-40">
            Code, create, and innovate <br />with live coding interviews
            
          </div>
        </header>
       

        <p className="text-center font-medium text-xl text-gray-500">
          75% of devs think technical interviews are broken. Swap your shared
          docs
          <br />
            and split screens for a fully-functioning IDE that gives developers
            the tools
         
            <br />
            to show off their hard and soft skills in a real-world environment.
          
        </p>
        <div className="flex justify-center gap-4 mt-10 text-color-white">
        <button
          type="button"
          className="px-9 py-2.5 mr-2 mb-2 text-sm font-medium bg-green-600 text-white rounded-md"
        >{" "}
          Get Demo
          {" "}
        </button>
        </div>
      </div>
     <div className="px-20 py-4">
     <div className="mt-10 mb-10 p-4 lg:p-6 max-w-screen-lg mx-auto">
            <img src="https://www.hackerrank.com/wp-content/uploads/2022/11/interview1.png" alt=""/>
        </div>
        </div>

      
    </div>
  );
}

export default Products;
