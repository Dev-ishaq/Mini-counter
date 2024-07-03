import React from 'react'
import '../assets/App.css';
import Button from './Button';


function Login() {
  return (
    <>
      <h2 className='txt'>User Login</h2>
      <input type="text" placeholder='Username'/>
      <br /><br />
      <input type="password" placeholder='Password'/>
      <br /><br />
      <Button type="reset" title="Login"/>
    </>
  )
}

export default Login
