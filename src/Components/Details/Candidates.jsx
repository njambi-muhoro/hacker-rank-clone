import React from 'react'
import { useParams } from 'react-router-dom';

import Table from './Table';

function Candidates() {
  const { id } = useParams();
  

  return (
   
    <div>
    <div className='flex mt-20px gp-20px'><Table id={id}/></div>
    </div>
    

  )
}

export default Candidates;