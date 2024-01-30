import Button from '@mui/material/Button';

import liff from '@line/liff';


const LineLoginButton = () => {

  const handleLineLogin = async () => {
    // console.log('in login func');
    try {
      await liff.init({
        liffId: '2002961723-1mlX4q3q', // Use your own liffId
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
        className="bg-success text-white rounded p-2 ps-4 pe-4"
        startIcon={<img src='/LINE_APP_iOS.png' alt="LINE logo" style={{ width: 20, height: 20 }} />}
        onClick={handleLineLogin}
      >
        Sign In With Line
      </Button>


    </>
  );
};

export default LineLoginButton;