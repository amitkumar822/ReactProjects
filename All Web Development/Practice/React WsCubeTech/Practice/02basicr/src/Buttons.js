import React, { useState } from 'react'
import btnModule from './Button.module.css'

function Buttons() {
    
  let template = '';
  let [pshow,setphshow] = useState(false)
  
  if(pshow){
      template = <>
        <p>I love React</p>
        <button className='bg-[yellow]' onClick={() => setphshow(!pshow)}>Hidd</button>
        <Card/>
      </>
  }else{
    template = <button className='bg-[yellow]' onClick={() => setphshow(!pshow)}>Show</button>
  }
  return (
    <>
      <div>{template}</div>
      <button className={btnModule.bg_prime}>Module Css</button>
      <button className={btnModule.bg_denger}>Module Css</button>

      
    </>
  )
}

export default Buttons

let Card =() =>{
    return (
        <h1>Card Function</h1>
    )
}