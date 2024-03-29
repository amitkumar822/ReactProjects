import React from 'react'

function Home(props) {
  const {college} = props
  const {name,email,phone,department,course} = college
  
  return (
    <>
        {/* <h2>{props.nm}</h2>
        <h2>{props.ph}</h2> */}

        {/* <h1>{props.college.name}</h1>
        <h1>{props.college.email}</h1>
        <h1>{props.college.phone}</h1>
        <h1>{props.college.department}</h1>
        <h1>{props.college.course}</h1> */}

        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{phone}</h1>
        <h1>{department}</h1>
        <h1>{course}</h1>
        
    </>
  )
}

export default Home