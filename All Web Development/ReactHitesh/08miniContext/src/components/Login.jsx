import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username'
        value={username}
        onChange={(event)=>setUsername(event.target.value)}
        />
        {" "}
        <input type="text" placeholder="password"
        value={password}
        onChange={(event)=>setPassword(event.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login