import React, { useEffect } from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";
import liff from '@line/liff';

function Login() {

  const navigate = useNavigate();

  useEffect(() => {
    // Using a Promise object
    liff
      .init({
        liffId: '2001717034-xGeOXRR5', // Use own liffId
      })

  }, [])

  const handleLineLogin = async () => {
    console.log('in login func')
    await liff.init({ liffId: '2001713049-4ZwejYYb' })
    console.log('below init line')
    if (!liff.isLoggedIn()) {
      console.log('ก่อน login')
      liff.login()
      console.log('หลัง login')
    }

    const profile = liff.getProfile()
    console.log('login แล้ว', profile)
  }

  const handleLogout = () => {
    liff.logout();
    console.log('logouttttttttt')


  }

  return (

    <div className="Auth-form-container">
      <div className="Auth-form">
        <form className="Auth-form-content">
          <div className='card-image'>
            <img src="src/assets/na.png" alt="" />
          </div>
          <br />
          <h3 className='text-dark text-center'>Sign In</h3>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password </label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
          
          <div className="text-center mt-1">
            <span className='text-dark'>Not registered yet?   </span>
            <span className="link-primary" onClick={() => navigate("/register")}>
              Sign Up
            </span>
          </div>
          <p className="text-center mt-2 text-dark">
            Forgot <a href="#">password?</a>
          </p>
        </form>
        <div className="line-button ms-5 me-5">
        <button type="submit" className="btn btn-success" onClick={handleLineLogin}>
          Sign In With Line
        </button>
      </div>
      </div>

    </div>
  )
}

export default Login