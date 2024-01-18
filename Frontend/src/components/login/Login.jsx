

import LineLoginButton from '../lineLoginButton/LineLoginButton';

import styles from './Login.module.css'
function Login() {

  return (
    <>
      <div className='container text-center '>
        
          <div className='row '>
            <div className='col-12 pt-2'>
              <img src="logo-nano.png" alt="logo" className={styles.nanoLogoImage} />
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