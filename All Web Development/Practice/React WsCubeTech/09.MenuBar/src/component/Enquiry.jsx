import React, { useState } from 'react'

function Enquiry() {
    let [modalstatus,setModalstatus] = useState(false);

  return (
    <>
      <button className='enquiryBtn' onClick={()=>setModalstatus(true)}>Enquiry Now</button>

        {/* Shadow Box  */}
      <div onClick={()=>setModalstatus(false)} className={`modalOverLay ${modalstatus ? 'modalShow' : ``} `}></div>

      {/* Enquiry Box  */}
      <div className={`ModalDiv ${modalstatus ? 'showModalDiv' : ''} `}>
        <h3>Enquiry Now1 <span onClick={()=>setModalstatus(false)} >&times;</span></h3>
      </div>
    </>
  )
}

export default Enquiry