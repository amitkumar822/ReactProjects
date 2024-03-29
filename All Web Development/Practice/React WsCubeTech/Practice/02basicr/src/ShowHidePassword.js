import React, { useState } from 'react'

function ShowHidePassword() {
  let [passwords,setPassword] = useState(false);
  return (
    <>
      <div className='flex justify-content-center '>
        <input type={(passwords) ? 'text' : 'password'} />
        <button className='btn bg-danger' onClick={()=> setPassword(!passwords)}>{passwords ? "Hide" : "Show"}</button>
      </div>
      
    </>
  )
}

export default ShowHidePassword