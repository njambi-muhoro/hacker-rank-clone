import { FiSearch } from 'react-icons/fi'
import React from "react"

function Search({search,handleSearch}) {
    
    return(
    <div className=" bg-white rounded-lg  border-blue-900 w-max mx-auto my-8">
        <div className="searchBar">
            <div className="flex rounded-lg">
                <input  value={search} onChange={(e)=> handleSearch(e.target.value)}                  
                className=' rounded-lg p-1 text-black outline-none px-3' type="text" placeholder="Search"/>
                <span className ='flex text-black items-center p-2 text-xl'><FiSearch /></span>
            </div> 
        </div>
    </div>
    )
}
export default Search;