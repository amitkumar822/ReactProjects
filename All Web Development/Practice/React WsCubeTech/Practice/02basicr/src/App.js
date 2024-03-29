import React from 'react'
import Home from './Home'
import Buttons from './Buttons'
import ShowHidePassword from './ShowHidePassword'
import Notification from './Notification'
import TodoList from './components/ToDoList'

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
      {/* <Home college={college}/> */}

      {/* <Buttons/> */}
      {/* <ShowHidePassword/> */}

      {/* <Notification/> */}

      <TodoList/>
    </>
  )
}

export default App