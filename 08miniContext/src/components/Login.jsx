import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Login() {
    // lets make the hook for username and password
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    // now we want to set the context ager hame user ka data lena hai toh ham lengeng but ager hame set karna hai toh kaha ka set karna hai iska contex dena parega 

    const {setUser} = useContext(UserContext)
    // so yaha ham context le rahe hai user contex ka aur usme ke user ke data ko set kar rahe hai 

    const handleSubmit =(e) => {
        // 
        e.preventDefault();
        // and ab hamare pass setuser ka access hai toh usme ham username au password bhej sakte hai 
        setUser({username, password})
    }

  return (
    <div style={{backgroundColor: "#212121"}}>
        <h2>Login</h2>
        <input 
            type="text" 
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)
            }}
            placeholder='username' 
            />
            <br />
        <input 
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        type="text" 
        placeholder='password' />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login