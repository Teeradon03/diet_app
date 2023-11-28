
import './Login.css'
import LineLoginButton from '../lineLoginButton/LineLoginButton';
import NanoLogo from '../logo/NanoLogo';

function Login() {

  return (
    <>
      <div className='container text-center mt-5'>
        <div className='row '>
          <div className='col-12 mt-5 pt-5'>
            
            <NanoLogo  />
          </div>
        </div>
        <div className='row mt-5 pt-5'> 
          <div className='col-12 mt-5 pt-5'>
            <LineLoginButton />
          </div>
        </div>
        </div>

    </>
  );
}

export default Login;
