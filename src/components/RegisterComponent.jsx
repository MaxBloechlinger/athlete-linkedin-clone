import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPIs";
import LinkedinLogo from "../assets/linkedinLogo.png"
import "../Sass/LoginComponent.scss";
import GoogleButton from 'react-google-button'
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";


export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState("");
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Joined successfully!")
      postUserData({name: credentials.name, email: credentials.email})
      localStorage.setItem('userEmail', res.user.email);
      navigate("/home")
    } catch (err) {
      console.log(err);
      toast.error("Can't create account")
    }
  };

  const googleSignIn=()=>{
    response = GoogleSignInAPI()
    navigate("/home")
  };
  return (
    <div className="login-wrapper">
      <img src= {LinkedinLogo} className="LinkedinLogo"/>
      

      <div className="login-wrapper-inner">
        <h1 className= "heading">Connect with athletes around the world</h1>

        
          <div className="auth-inputs">
            <input
              onChange={(event) =>
                setCredentials({ ...credentials, name: event.target.value })
              }
              type="text"
              className="common-input"
              placeholder="Name"
            />
            <input
              onChange={(event) =>
                setCredentials({ ...credentials, email: event.target.value })
              }
              type="email"
              className="common-input"
              placeholder="Email or phone number"
            />
            <input
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
              type="password"
              className="common-input"
              placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={register} className="login-btn">
          Join
        </button>
      </div>  
    <hr class="hr-text" data-content="or"/>
    <div className="google-btn-container">
      <GoogleButton className="google-btn"onClick={googleSignIn}/>
        <p className="go-to-sign-up">
          Already on Nethletes?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
                Sign in
              </span>
            </p>
        </div>
    </div>
  );
}
