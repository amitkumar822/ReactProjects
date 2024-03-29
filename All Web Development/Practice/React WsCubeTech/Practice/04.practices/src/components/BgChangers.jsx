import React, { useState } from 'react'

function BgChangers() {
    let [color ,setColor] = useState('yellow')
  return (
    <div className="w-full h-screen duration-200 p-3"
     style={{backgroundColor: color}}
    >
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="bg-white flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
                
                <button onClick={()=>setColor('red')} className='bg-[red] px-4 py-1 rounded-full text-white'>Red</button>
                <button onClick={()=>setColor('green')} className='bg-[green] px-4 py-1 rounded-full text-white'>Green</button>
                <button onClick={()=>setColor('blue')} className='bg-[blue] px-4 py-1 rounded-full text-white'>Blue</button>
                <button onClick={()=>setColor('yellow')} className='bg-[yellow] px-4 py-1 rounded-full text-black'>Yellow</button>
                <button onClick={()=>setColor('orange')} className='bg-[orange] px-4 py-1 rounded-full text-black'>Orange</button>
            </div>
        </div>
    </div>
  )
}

export default BgChangers