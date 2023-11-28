import Button from '@mui/material/Button';

import { useEffect } from 'react';
import liff from '@line/liff';

const LineLoginButton = () => {


  useEffect(() => {
    const initializeLiff = async () => {
      try {
        await liff.init({
          liffId: '2001717034-xGeOXRR5', // Use your own liffId
        });
      } catch (error) {
        console.error('Error initializing LIFF:', error);
      }
    };

    initializeLiff();
  }, []);

  const handleLineLogin = async () => {
    console.log('in login func');
    try {
      await liff.init({ liffId: '2001713049-4ZwejYYb' });
      console.log('below init line');

      if (!liff.isLoggedIn()) {
        console.log('before login');
        liff.login();
        console.log('after login');
      }

      const profile = await liff.getProfile();
      console.log('logged in', profile);
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
        startIcon={<img src='public\LINE_APP_iOS.png' alt="LINE logo" style={{ width: 20, height: 20 }} />}
        onClick={handleLineLogin}
      >
        Sign In With Line

      </Button>


    </>
  );
};

export default LineLoginButton;