import { useEffect } from "react";
import liff from '@line/liff';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login as loginRedux } from "../../store/userSlice";

const Home = () => {
  const navi = useNavigate()
  const disPatch = useDispatch()

  useEffect(() => {
    liff.init({ liffId: `${import.meta.env.VITE_LIIF_ID}` })
      .then(() => {
        /// something 
        handleLineLogin()

        // roleRedirect(response.data.role)
      })
  })
  const roleRedirect = (role) => {
    // console.log('role in role redirect', role)
    if (role === 'user'){
      setTimeout(() => navi('/user/index'), 3000)
      // navi('/user/index')
    }
    else{
      setTimeout(() => navi('/admin/index'), 3000)
      
    }

  }

  const handleLineLogin = async () => {
    try {
      // const userProfile = await liff.getProfile();
      const idToken = liff.getIDToken();
      // const accessToken = liff.getAccessToken();
      // console.log('access token: ' + accessToken)
      // console.log('idToken', idToken);
      // console.log('user profile', userProfile);
      const response =  axios.post(`${import.meta.env.VITE_URL_API}/api/user/user-login`, idToken,
        {
          withCredentials: true
        }
        
      ).then((response) => {
        // console.log('response data from home',response.data.user)
        disPatch(loginRedux({
          userId: response.data.user.userId,
          role: response.data.user.role,
          name: response.data.user.name
        }))
        localStorage.setItem('userId',response.data.user.userId)
        roleRedirect(response.data.user.role)
     
      }).catch((error) => {
        // console.log('error', error.message)
      }
      )


    }
    catch (error) {
      console.log(error)
    }
  }
  





  return (
    <div className="container text-center">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <h1 className="fw-bold">โปรแกรมการลดน้ำหนัก</h1>
      </div>
    </div>

  );
};

export default Home;