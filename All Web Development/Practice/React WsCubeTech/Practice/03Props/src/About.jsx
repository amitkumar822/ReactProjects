import React from 'react'

function About({college,other}) {
    let {name,email,phone,department,course} = college
  return (
    <>
        <br />
        <h1>{`${name} ${email} ${phone} ${department} ${course}`}</h1>
        <h2>{other}</h2>
    </>
  )
}

export default About