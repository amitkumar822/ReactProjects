import { useState } from "react";
import './App.css'
import NewCounter from "./NewCounter";

function NewPractice(){
    let [counter, setCounter] = useState(2)

    const mulValue = () =>{
        console.log("Multi added",counter);
        setCounter(counter*2)
    }
    return(
        <>
            <h1>Amit Kumar Singh</h1>  
            <h2>Value Update: {counter}</h2>  

            <button onClick={mulValue}>Multiplication Value</button>    

            <NewCounter/>
        </>
    )
}

export default NewPractice