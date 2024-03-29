import React from 'react'
import Home from './Home'
import About from './About'
import Children from './ChildrenProps'


function App() {
  let college={
    'name':"Amit Kumar",
    'email':"amitkarma@gmail.com",
    'phone':"123456",
    'department':"MCA",
    'course':"Master of Computer Applications"
  }
  return (
    <>
      {/* <Home nm="amitkr21@gmail.com" ph="8228843870"/> */}
      <Home college={college}/>
      <About college={college} other="Bihar"/>
      <Children cname="Amit Singh">
        <h1>Hello Children Props</h1> 
          {/* Children (or Component) ke under element children props hota hai*/}
      </Children>
    </>
  )
}

export default App