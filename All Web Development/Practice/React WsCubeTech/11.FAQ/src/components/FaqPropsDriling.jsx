import React, { useState } from "react";
import { question } from "../data/faqQuestion";

export default function FaqPropsDriling() {
    let [currentId,setCurrentId] = useState(question[0].id)
  let itesm = question.map((itemData) => {
    let itemDetails = {
        itemData,
        currentId,
        setCurrentId
    }
    return (
      <>
        <FaqItems itemDetails={itemDetails}/>
      </>
    );
  });

  return (
    <>
      <h1>Hello</h1>
      <div className="faqouter">
        <h2>{itesm}</h2>
      </div>
    </>
  );
}

export function FaqItems({itemDetails}) {
    // console.log("ID "+itemDetails.idx);
    let {itemData,currentId,setCurrentId} = itemDetails
  return (
    <>
      <div className="faqItems">
        <h2 onClick={()=>setCurrentId(itemData.id)}>{itemData.question}</h2>
        <p className={currentId===itemData.id ? 'activeAns':''}>
            {itemData.answer}
        </p>
      </div>
    </>
  );
}
