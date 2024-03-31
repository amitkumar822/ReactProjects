import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'


function Github() {
   const data = useLoaderData()
   
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response => response.json())
  //   .then(data =>{
  //     console.log(data);
  //     setData(data)
  //   })
  // }, [setData])


  console.log("Data: ",data.length)
  return (
    <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img className='lg:ml-[36%] sm:ml-[25%] mt-4' src={data.avatar_url} alt="Github Photo" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoder = async () =>{
  const response = await fetch('https://api.github.com/users/amitkumar822')
  return response.json();
}