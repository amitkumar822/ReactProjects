import React from 'react'

function ChildrenProps({children,cname}) {
  return (
    <>
        <h1>{children}</h1>
        <h2>{cname}</h2>
    </>
  )
}

export default ChildrenProps