import React from "react";
import { question } from "../data/faqQuestion";
import { useState } from "react";
import FaqPropsDriling from "./FaqPropsDriling";

function FaqBox() {
 let [showAns,setShowAns] = useState(question[0].id);

  return (
    <>
      <FaqPropsDriling/>

      {/* <div className="faqBox">
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className="faqouter">

          {question.map((faqItems) => {
            return (
              <div className="faqItems" key={faqItems.id}>
                <h2 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question}</h2>
                <p className={showAns==faqItems.id ? 'activeAns' : ''}>{faqItems.answer}</p>
              </div>
            );
          })}

        </div>
      </div> */}
    </>
  );
}

export default FaqBox;
