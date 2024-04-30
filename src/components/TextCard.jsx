import React from 'react'

function TextCard(props) {
  return (
    <div>
        <div className='w-[293px] mx-auto border font-semibold text-center py-4 rounded-lg shadow mb-6 cursor-pointer hover:scale-105 duration-200'>
         {props.place}
        </div>
    </div>
  )
}

export default TextCard