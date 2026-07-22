import React from 'react'
import { Login as LoginComponent  } from ".../components";

function Login() {
  return (
    <div className='py-8'>
                {/* no wrap with container only login  component */}
{/* we use alices for login */}
        <LoginComponent/>
    </div>
  )
}

export default Login