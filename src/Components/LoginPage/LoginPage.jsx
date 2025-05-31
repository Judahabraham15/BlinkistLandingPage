import React, { useState } from 'react'
import './LoginPage.css'
const LoginPage = ({onLogin}) => {
  const[errors, setErrors] = useState({})
  
  function handleClick(e){
    e.preventDefault()

  const email = document.getElementById('email');
  const password = document.getElementById('password');

       const newError = {};
     
     if(email.value === ''){
       newError.email = "Email is required"
      email.style.border = '2px solid red'
     }
     else{
      email.style.border = '2px solid green'
     }
     if(password.value === ''){
      newError.password = "Password is required"
      password.style.border = '2px solid red'
     }
     else{
      password.style.border = '2px solid green'
     }
     
     setErrors(newError);
  // If there are no errors, proceed with login
       if(Object.keys(newError).length === 0){
    onLogin();
  }
  }
   
  return (
     <div className="login-container">
      <div className="login-left" >
    <svg
    className="curvy-lines"
    viewBox="0 0 500 600"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    {Array.from({ length: 10 }).map((_, i) => {
      const x = i * 20;
      return (
        <path
          key={i}
          d={`M${x},0 Q${x + 100},150 ${x},300 Q${x + 100},450 ${x},600`}
          stroke="#ffffff66"
          fill="none"
          strokeWidth="1"
        />
      );
    })}
  </svg>
  

        <div className="logo">
            <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 26" enableBackground="new 0 0 134 26" color="#03314B" className="w-autoh-auto " width={'200'} height={'40'}>
        <path  fill="#2CE080" d="M19.8,0l-6,6l-6-6C3.1,2.2,0,6.9,0,12.3C0,19.9,6.1,26,13.7,26 c7.6,0,13.8-6.1,13.8-13.7C27.5,6.9,24.3,2.2,19.8,0z"></path>
        <path fill="#03314B" d="M17.4,9.6L13.7,6l-3.6,3.6c-2,2-2,5.3,0,7.3c2,2,5.3,2,7.3,0 C19.4,14.9,19.4,11.6,17.4,9.6z"></path>
        <path fill="currentColor" d="M44.1,16.7c0-1.1-0.8-1.7-1.9-1.7h-3.8v3.3h3.8 C43.4,18.3,44.1,17.8,44.1,16.7z M38.4,7.7V11h1.8c1.2,0,1.9-0.7,1.9-1.7c0-1-0.7-1.7-1.9-1.7H38.4z M49,16.9c0,3.3-2.8,5.7-6.5,5.7 h-8.9v-19h6.9c3.7,0,6.5,2.2,6.5,5.6c0,1.3-0.4,2.4-1.2,3.2C47.8,13.1,49,14.6,49,16.9z"></path>
        <path fill="currentColor" d="M51.4,22.5h5V0.9h-5V22.5z"></path>
        <path fill="currentColor" d="M59.6,22.5h5V8.1h-5V22.5z M65.2,3c0,1.6-1.4,2.9-3.1,2.9 c-1.7,0-3-1.3-3-2.9c0-1.7,1.4-2.9,3-2.9C63.8,0.1,65.2,1.3,65.2,3z"></path>
        <path fill="currentColor" d="M82,13.6v8.9h-5v-8.2c0-1.3-0.9-2.1-2.1-2.1 c-1.2,0-2.1,0.8-2.1,2.1v8.2h-5V8.1h4.5v1.2c1-0.9,2.4-1.5,4.1-1.5C79.9,7.8,82,10.1,82,13.6z"></path>
        <path fill="currentColor" d="M95.3,22.5l-5.2-7.6v7.6h-5V0.9h5v13l4.5-5.8h5.8l-5,6.4l5.3,8 H95.3z"></path>
        <path fill="currentColor" d="M102.4,22.5h5V8.1h-5V22.5z M107.9,3c0,1.6-1.4,2.9-3.1,2.9 c-1.7,0-3-1.3-3-2.9c0-1.7,1.4-2.9,3-2.9C106.5,0.1,107.9,1.3,107.9,3z"></path>
        <path fill="currentColor" d="M121.3,9.9l-2.3,3c-1-0.8-2-1.2-3.1-1.2c-0.6,0-1,0.1-1,0.5 c0,0.4,0.3,0.5,1,0.8l1.4,0.6c2.6,1,4.2,2.1,4.2,4.5c0,3-2.5,4.8-6,4.8c-2.6,0-4.9-1-6.2-2.8l2.3-2.9c1.2,1.2,2.6,1.8,4,1.8 c0.7,0,1.3-0.1,1.3-0.6c0-0.3-0.3-0.5-0.8-0.7l-1.6-0.7c-2.6-1.1-4.2-2.2-4.2-4.6c0-2.9,2.3-4.6,5.6-4.6 C118,7.7,119.9,8.4,121.3,9.9z"></path>
        <path fill="currentColor" d="M134,18.4v4.2c-0.8,0.2-1.8,0.3-2.9,0.3c-4,0-6.4-1.9-6.4-5.9v-4.8 h-2.2V8.1h2.2V4.6h5v3.5h3.9v4.2h-3.9v4.3c0,1.4,0.7,1.9,2.5,1.9C132.6,18.4,133.2,18.4,134,18.4z"></path>
</svg>

        </div>
      </div>

      
      <div className="login-right">
        <div className="login-form">
          <h2>Log In</h2>
          <div className="input-wrapper">
          <label>Email Address</label>
          <input type="email" id='email' placeholder="Enter email" required/>
            {errors.email && <span className='err-message'>{errors.email}</span>}

          <label>Password</label>
          <input type="password" id='password' placeholder="Enter password" required />
              {errors.password && <span className='err-messages'>{errors.password}</span>}
          <a href="#" className="forgot-password">Forgot your password?</a>
</div>
          <button onClick={handleClick} className="login-btn">Log In</button>

          <div className="divider"><span>Or</span></div>
           
<div className="social-btn-row">
<button className="google-btn">
               <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c">
<g>
  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
<path fill="none" d="M0 0h48v48H0z"></path>
</g>
</svg>
 <span>Sign in with Google</span> 
  </button>

          <button className="facebook-btn">
             <svg
      viewBox="0 0 320 512"
      height="1.2em"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      ></path>
    </svg>
            <span>Sign in with Facebook</span>
            </button>
          <button className="apple-btn">
             <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      class="socialSvg twitterSvg"
    >
      <path
        d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
      ></path>
    </svg>
           <span>Sign in with X</span> 
            </button>
            </div>
          <p className="signup-text">
            New to Blinkist? <a href="#">Sign up now.</a>
          </p>
        </div>
      </div>
    </div>

  )
}

export default LoginPage