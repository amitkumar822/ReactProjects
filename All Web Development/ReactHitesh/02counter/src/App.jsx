import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("value added", counter);
    counter = counter+1
    setCounter(counter);
  }

  const removeValue = () => {
    counter = counter-1;
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>

      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
