import { useState } from "react";

function AppScorekeeper(){
    let [score,setScore] = useState(0);
    let [wicket,setWicket] = useState(0);
    let [ballWicketsRes,setballWicketsRes] = useState([]);
    // let ballWicketsRes = [];

    function addScore(num){
        if(wicket<10){
            score += num;
            setScore(score);
            ballWicketsRes.push(num);
        }
    };

    function addWicket(){
        if(wicket<10){
            wicket +=1;
            setWicket(wicket);
            ballWicketsRes.push("w");
        }
    };

    const ScoreButtons = () => {
        return(
            <>
            <button onClick={()=> addScore(1)}>1</button>
            <button onClick={()=> addScore(2)}>2</button>
            <button onClick={()=> addScore(3)}>3</button>
            <button onClick={()=> addScore(4)}>4</button>
            <button onClick={()=> addScore(5)}>5</button>
            <button onClick={()=> addScore(6)}>6</button>
            <button onClick={()=> addScore(7)}>7</button>
            <button onClick={()=> addScore(8)}>8</button>
            <button onClick={()=> addScore(9)}>9</button>
            <button onClick={addWicket}>wicket</button>
            </>
        );
    }
    const Balls = () =>(
        <div>
            {
                ballWicketsRes.map((res,index)=>(
                    <span key={index}>{res}</span>
                ))
            }
        </div>
    );


    return(
        <>
            <h1>SCORE KEEPS</h1>
            <h2>SCORE {score}/{wicket}</h2>
            <ScoreButtons/>
            <Balls/>
        </>
    );
}

export default AppScorekeeper