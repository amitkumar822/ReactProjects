import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

function Password() {
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [passwordAllowed, setPasswordAllowed] = useState("")


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*_+{}[]"

    for (let i = 0; i < length; i++) {
        let chIdx = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(chIdx)
    }

    setPasswordAllowed(pass)

  },[length,numberAllowed,charAllowed,setPasswordAllowed])


  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(passwordAllowed)
  },[passwordAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator]);

  return (
    <>
      <div className=" bg-[#000000] h-[100vh] w-full py-6">
        <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-800">
          <h1 className=" text-white text-center my-3">Password generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              className=" outline-none w-full py-1 px-3"
              placeholder="password"
              value={passwordAllowed}
              ref={passwordRef}
              readOnly
            />
            <button className=" outline-none bg-blue-700 text-white  px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipBoard}
            >
              copy
            </button>
          </div>
          <div className=" flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                onChange={(e)=>setLength(e.target.value)}
                className=" cursor-pointer"
              />
              <label>Length: {length}</label>
            </div>

            <div className=" flex items-center gap-x-1">
              <input type="checkbox" id="numberInput"
               defaultValue={numberAllowed}
               onChange={()=>setNumberAllowed((prev)=>!prev)}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className=" flex items-center gap-x-1">
              <input type="checkbox" id="characterInput" 
              onChange={()=>setCharAllowed((prev)=>!prev)}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Password;
