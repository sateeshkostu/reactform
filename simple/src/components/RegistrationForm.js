import React,{useState} from "react";
import './signup.css';
import { useNavigate, Link } from 'react-router-dom';
import LoginForm from "./LoginForm";

function RegistrationForm() {
  const [data,setData] = useState({
    username :'',
    email : '',
    password : '',
    confirmpassword : '',
  })
  const {username,email,password,confirmpassword} = data;
  const navigate = useNavigate();



  return (
    <>
      <div className="signup">
        <div className="card">
          <h1>Registration Form</h1>
          <form className="signup">
            <div>
              <label>User Name</label>
              <input placeholder="username" type="text"/>
            </div>
            <div>
              <label>Email</label>
              <input placeholder="email" type="email" />
            </div>
            <div>
              <label>Password</label>
              <input placeholder="password" type="password"/>
            </div>
            <div>
              <label>Confirm Password</label>
              <input placeholder="confirmpassword" type="password"/>
            </div>
            <button style={{ backgroundColor: "#a1eafb" }} onClick={()=>{navigate("/LoginForm")}}>Submit</button>
            <p className="text-center">Have already an account <Link to="/LoginForm">LoginForm</Link></p>
          </form>
        </div>
      </div>
    </>

  );
}

export default RegistrationForm;
