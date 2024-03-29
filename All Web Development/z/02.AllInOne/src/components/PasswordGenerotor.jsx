import React from "react";
import { useState, useEffect ,useCallback ,useRef} from "react";

function PasswordGenerotor() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllwoed] = useState(false)
    const [password, setPassword] = useState('')


    const passwordGenerators = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str += "0123456789";
        if(charAllowed) str += "~!@#$%^&*_+{}[]";

        for (let i = 1; i <= length; i++) {
            let charIdx  = Math.floor(Math.random() * str.length+1)
            pass += str.charAt(charIdx)

        }
        setPassword(pass)
    },[length,numberAllowed,charAllowed,setPassword])


    useEffect(() => {
        passwordGenerators();
    }, [length,numberAllowed,charAllowed,passwordGenerators]);

    const passwordRef = useRef(null)

    const copyPasswordToClicpBord = useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,100)
        window.navigator.clipboard.writeText(password)
    },[password])

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <div className="w-[500px] bg-slate-700 p-3 rounded-2xl">
          <h1 className="text-white text-center my-4">Password Generator</h1>

          <div className="flex">
            {/* flex shadow overflow-hidden rounded-lg mb-4 */}
            <input
              className="w-full py-2 px-5 rounded-l-3xl outline-none border-none"
              type="text"
              value={password}
              ref={passwordRef}
              placeholder="passwords"
              readOnly
            />
            <button onClick={copyPasswordToClicpBord} className="bg-[blue] py-[8.2px] px-5 rounded-r-2xl text-white">
              Copy
            </button>
          </div>

          <div className="flex gap-x-4 text-lg my-2 text-orange-500">
            <div className="flex items-center gap-x-1">
              <input htmlFor="Length" 
              type="range" 
              min={8} max={100}
              value={length}
              onChange={(e)=>setLength(e.target.value)}
               className=" cursor-pointer"
               />
              <label htmlFor="Length">
                Length {`(${length})`}
              </label>
            </div>

            <div className="flex gap-x-1 items-center ">
              <input htmlFor="NumberBox" type="checkBox" 
              defaultChecked={numberAllowed}
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
              className=" cursor-pointer"
              />
              <label htmlFor="NumberBox">Numbers</label>
            </div>

            <div className="flex gap-x-1 items-center">
                <input  htmlFor="charBox"
                type="checkBox" 
                defaultChecked={charAllowed}
                onChange={()=>setCharAllwoed((prev)=>!prev)}
                className=" cursor-pointer"
                />
                <label htmlFor="charBox">Characters</label>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerotor;
