import React from 'react'
import { useState } from 'react'

function MenuBar() {
    let [menuItems,setMenuItems] = useState(false)
  return (
    <>
        <button className='btn' onClick={()=>setMenuItems(!menuItems)}>{menuItems ? <span>&times;</span> : <span>&#9776;</span>}
        </button>
        <div className={`menu ${menuItems ? 'activeMenu' : ''}`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Gallery</li>
            </ul>
        </div>
    </>
  )
}

export default MenuBar