import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <h3 className='login--title'>ADMIN</h3>
      <h2 className='login--header'>Admin Sign In</h2>
      <div className='login--input'>
        <p className='login--admin'><strong>ADMIN NAME&#1645;</strong></p>
        <input type="text" className='login--input--input' placeholder='Username' required/>
        <p className='login--password'><strong>PASSWORD&#1645;</strong></p>
        <input type="text" className='login--input--input' placeholder='Password' required/>
      </div>
      <div>
        <button className='login--button'>Sign in</button>
      </div>
      <div className="login--interact">
        <span className="login--remember">
          <label className="login--interact--remember">
            <input type="checkbox" className='login--checkbox'/>
            <span className='checkmark'></span>
            Remember Me
          </label>
        </span>
        <span className="login--forgot">
          <a href="">Forgot Password</a>
        </span>
      </div>
    </div>
  )
}

export default Login