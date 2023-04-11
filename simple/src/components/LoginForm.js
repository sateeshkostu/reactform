import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './login.css'

function LoginForm() {
  const [username,setusername] = useState('');
  const [password,setpassword] = useState('');

  const [errors,seterrors] = useState({
    email: '',
    password: ''
  })
  const login = () => {
    if (username.trim()===""){
      seterrors({...errors,username:"enter username address"})
    }
    else{
      seterrors({...errors,username:""})
    }
   console.log("hi")
  }
  
    return (
        <div className="login">
          <div className="card">
            <h1>Login form</h1>
            <form className="login">
              <div>
                <label>Username</label>
                <input placeholder="username" type="text"/>
                {errors.email&&<span>{errors.email}</span>}
              </div>
              <div>
                <label>Password</label>
                <input placeholder="password" type="password"/>
                {errors.email&&<span>{errors.email}</span>}
              </div>
              {/* <button style={{ backgroundColor: "#a1eafb" }}>login</button> */}
            </form>
            <Link to="/ImageGallery"><button style={{ backgroundColor: "#a1eafb" }} onClick={login}>Login</button></Link>
            {/*We donot have to paste the link tag in Button
            For Navigate from One Screen to another Screen by using the Button inside the Link Tag   */}
            <p className="text-center"> Don't have account? <Link to="/RegistrationForm">Registration Form</Link></p>
          </div>
        </div>
    );
  }

export default LoginForm;