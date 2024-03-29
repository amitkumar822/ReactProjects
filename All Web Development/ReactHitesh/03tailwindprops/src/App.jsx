import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { CardOne } from './components/CardOne'

function App() {
  // const [count, setCount] = useState(0)

  let myObj ={
    username: "Amit Kumar Singh",
    age: 24,
    Degree: "MCA"
  }

  let myArr = [1,2,3,4]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     {/* <Card/> */}
     {/* <CardOne channel="Chai aur Code" someObject={myObj} newArr={myArr}/> */}

     <CardOne username="ChaiAurCode" btnText="Click Me"/>
     <CardOne username="CodeWithAmitSingh" btnText="Visit Me"/>
    </>
  )
}

export default App
