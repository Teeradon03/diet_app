import  { useState } from 'react';
import { Image, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Bmi/Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Height_show() {
  const [height, setHeight] = useState('');
  const navi = useNavigate()

  const handleInputChange = (e) => {
    const value = e.target.value;
    setHeight(value);
  };

  const handleNextClick = () => {
    if (height.trim() === '' || height < 100 || height > 300) {
      alert('กรุณากรอกส่วนสูงของคุณให้ถูกต้อง (100-300 กก.)');
    } else {
      // console.log('Height:', height);
      handleSubmit(); // Call the handleSubmit function to send data to the server
      navi('/Target')
    }
  };
  

  const handleSubmit = async () => {
    // console.log('Height:', height);

    const dataToSend = {
      height: height,
    };

    try {
      await axios.post(`${import.meta.env.VITE_URL_API}/api/user/update-user-data`, dataToSend, { withCredentials: true });
      // console.log('Data sent successfully');
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <div className={styles.Bmi1}>
      <h1 className={styles.Bmi1}>ส่วนสูงของคุณเท่าไหร่</h1>
      <div className={styles.inputlabel}>
        <input className={styles.inputlabel}
          type="number"
          value={height}
          onChange={handleInputChange}
        />
        <label htmlFor="height">&nbsp; ซม.</label>
      </div>
      <br />

      <h2>โปรดป้อนค่าตั้งแต่ &nbsp; 100 ซม. ถึง 300 ซม.</h2>

      <Image className={styles['ant-image-img']} src="/bmi_img/hight.jpg" alt='height image'/>
      <div>
        <button className={styles.nextbutton} onClick={handleNextClick}>
          ถัดไป
        </button>
      </div>
      <Link to="/Weight_show">
        <button 
        className={styles.chevronicon} 
        onClick={() => navi("/Weight_show")}>
          <VscChevronLeft />
        </button>
      </Link>
    </div>
  );
}

export default Height_show;