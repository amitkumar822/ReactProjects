import React from 'react'
import { useParams } from "react-router-dom";


function User() {
    const {userid} = useParams()
    console.log("Hello Prams ",userid);
  return (
    <div className=' text-3xl bg-gray-600 text-white p-4 m-4 text-center shadow-lg'>User: {userid} </div>
  )
}

export default User