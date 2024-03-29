import React, { useState } from 'react'
import {LC, NC, SC, UC} from '../data/PassChar'

function PasswordGen() {
  let [uppercase,setUppercase] = useState(false)
  let [lowercase,setLowercase] = useState(false)
  let [numbers,setNumbers] = useState(false)
  let [symbols,setSymbols] = useState(false)
  let [passwordlen,setPasswordlen] = useState(10)
  let [fPass,setPass] = useState('')

  let createPassword =()=>{
    let charSet = ''
    let finalPass = ''
    if(uppercase || lowercase || numbers || symbols){
      if(uppercase) charSet += UC;
      if(lowercase) charSet += LC;
      if(numbers) charSet += NC;
      if(symbols) charSet += SC;
      
      for(let i=0; i<passwordlen; i++){
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      // console.log(finalPass);
      setPass(finalPass)
    }else{
      alert("Please one CheckBox!....")
    }
  }

  let copyPass =()=>{
    navigator.clipboard.writeText(fPass)
  }


  return (
    <>
     <div className="passwordBox">
      <h2>Password Generator</h2>

      <div className="passwordBoxIn">
        <input type="text" value={fPass} readOnly style={{fontSize:"20px"}}/> <button onClick={copyPass} className='CopyBtn'>Copy</button>
      </div>

      <div className="passLength">
        <label>Password Length</label>
        <input className='pasInLen' type="number" value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)} min={5} max={20}/>
      </div>

      <div className="passLength">
        <label>Include uppercase letter</label>
        <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>

      <div className="passLength">
        <label>Include lowercase letter</label>
        <input type="checkbox"  checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
      </div>

      <div className="passLength">
        <label>Include numbers</label>
        <input type="checkbox"  checked={numbers} onChange={()=>setNumbers(!numbers)}/>
      </div>

      <div className="passLength">
        <label>Include symbols</label>
        <input type="checkbox"  checked={symbols} onChange={()=>setSymbols(!symbols)}/>
      </div>
      <button className='btn' onClick={createPassword}>Generator password</button>

     </div>
    </>
  )
}

export default PasswordGen