import React, { useState } from 'react'

function ControlledComponent() {
    let [userName,setUserName] = useState('');
    let [password,setPassword] = useState('');

    let handleSubmi = (ev) =>{
        ev.preventDefault();
        console.log(userName,password);
    }
  return (
    <>
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={handleSubmi}>
                        <div className="text-start my-3">
                            <label>UserName</label>
                            <input type="text" onChange={(event)=>setUserName(event.target.value)} name={userName} className=' form-control'/>
                        </div>

                        <div className="text-start my-3">
                            <label>Password</label>
                            <input type="password" onChange={(event)=>setPassword(event.target.value)} name={password} className=' form-control'/>
                        </div>

                        <div className="text-start my-3">
                            <button className='btn btn-danger'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ControlledComponent