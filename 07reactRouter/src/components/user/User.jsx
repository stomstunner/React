// here we want ki ham jaisse hi url me last me user likene ke baad slash dalne ke baad jo bhi daale usse page pe kaisse display kare isse ham datbse call ya page pe kuch seperate chizo ko dikhana chahate hai toh usme use ho sakta hai 

import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    // now we make the hook for store the params value 
    const {userid} = useParams()

  return (
    <div className='bg-gray-400 text-center text-4xl font-bold text-blue-300 py-10 my-20 rounded-full border-2  border-[#1c3982] '>User : {userid}</div>
  )
}

export default User