import { useEffect } from "react";
import liff from '@line/liff';
import axios from 'axios';

const Home = () => {

  useEffect(() => {
    liff.init({ liffId: '2002961723-1mlX4q3q' })
      .then(() => {
        /// something 
        handleLineLogin()
      })
  })
  const handleLineLogin = async () => {
    try {
      // const userProfile = await liff.getProfile();
      const idToken = liff.getIDToken();
      // const accessToken = liff.getAccessToken();
      // console.log('access token: ' + accessToken)
      // console.log('idToken', idToken);
      // console.log('user profile', userProfile);
      const response = await axios.post("http://localhost:9999/api/user/user-login", idToken,
        {
          withCredentials: true
        }
      )
      console.log(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }
   setTimeout(() => window.location.replace('/form'), 3000); // Set a timeout of 3 seconds (3000 milliseconds)

  return (
    <div className="container text-center">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <h1 className="fw-bold">โปรแกรมการลดน้ำหนัก</h1>
      </div>
    </div>

  );
};

export default Home;