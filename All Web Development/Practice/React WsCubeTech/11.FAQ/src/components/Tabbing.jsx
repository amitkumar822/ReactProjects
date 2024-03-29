import React, { useState } from "react";
import "../tabbing.css";
import {tabs} from "../data/tabData";

function Tabbing() {
    let [activeTabs, setActiveTabs] = useState(0)
    let [activeContent, setActiveContent] = useState(tabs[0])

    let changeData =(index)=>{
        setActiveTabs(index);
        setActiveContent(tabs[index])
    }
  return (
    <>
      <div className="tabsOuter">
        <h1>Tabbing container</h1>
        <ul>
          {tabs.map((tabsItesm, index) => {
            return (
              <li>
                <button onClick={()=>changeData(index)} className={activeTabs===index ? 'activeButton' : ''}>{tabsItesm.title}</button>
              </li>
            );
          })}
        </ul>
        {activeContent !==undefined ? <p>{activeContent.description}</p> : ''}
      </div>
    </>
  );
}

export default Tabbing;
