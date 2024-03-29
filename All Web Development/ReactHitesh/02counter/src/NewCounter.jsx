import { useState } from "react";

function NewCounter(){
    let [counter, setCounter] = useState(15);

    const addValue = ()=>{
        // counter = counter+1
        // setCounter(counter)

        setCounter(prevCounter => prevCounter+1);
        setCounter(prevCounter => prevCounter+1);
        setCounter(prevCounter => prevCounter+1);
        setCounter(prevCounter => prevCounter+1);
    }

    const remValue = () => {
        counter = counter-1;
        setCounter(counter)
    }

    return(
        <>
            <h1>New Counter Function</h1>
            <h2>New Counter value: {counter}</h2>

            <button onClick={addValue}>Add Value {counter}</button>
            <br />
            <button onClick={remValue}>remove value: {counter}</button>
        </>
    )
}

export default  NewCounter