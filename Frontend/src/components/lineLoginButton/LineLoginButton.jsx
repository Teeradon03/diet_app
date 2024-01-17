import Button from '@mui/material/Button';

import liff from '@line/liff';


const LineLoginButton = () => {

  const handleLineLogin = async () => {
    console.log('in login func');
    try {
      await liff.init({
        liffId: '2002171340-w1AjWX9e', // Use your own liffId
      });
      if (!liff.isLoggedIn()) {
        // console.log('before login');
        liff.login();
      }
      else {
        window.location.replace('/home')
      }
    } catch (error) {
      console.error('Error in Line login:', error);
    }
  };



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