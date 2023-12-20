import Button from '@mui/material/Button';

import liff from '@line/liff';
import axios from 'axios';

const LineLoginButton = () => {

  const handleLineLogin =  async () => {
    console.log('in login func');
    try {
      await liff.init({
        liffId: '2002171340-w1AjWX9e', // Use your own liffId
      });
      if (!liff.isLoggedIn()) {
        console.log('before login');
        liff.login();
      }
      const userProfile = await liff.getProfile();
      const idToken = liff.getIDToken();
      // const accessToken = liff.getAccessToken();
      // console.log('access token: ' + accessToken)
      console.log('idToken', idToken);
      console.log('user profile', userProfile);
      lineSend(idToken)
      if (liff.isLoggedIn()) {
        window.location.replace('/home')
      }
    } catch (error) {
      console.error('Error in Line login:', error);
    }
  };

  const lineSend = async(idToken) => {
    try{
      await axios.post("http://localhost:9999/api/user-login", idToken)
      console.log("data",idToken)
      
    }
    catch(error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button
        variant="contained"
        style={{
          backgroundColor: '#00BF00',
          color: 'white',
          borderRadius: 5,
          padding: '10px 20px',
        }}
        startIcon={<img src='/LINE_APP_iOS.png' alt="LINE logo" style={{ width: 20, height: 20 }} />}
        onClick={handleLineLogin}
      >
        Sign In With Line

      </Button>


    </>
  );
};

export default LineLoginButton;