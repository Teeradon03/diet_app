import  { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Bmi/Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Height_show() {
  const [height, setHeight] = useState('');
  const questionId = '44';

  const handleInputChange = (e) => {
    const value = e.target.value;
    setHeight(value);
  };

  const handleNextClick = () => {
    if (height.trim() === '' || height < 100 || height > 300) {
      alert('กรุณากรอกส่วนสูงของคุณให้ถูกต้อง (100-300 ซม.)');
    } else {
      console.log('Height:', height);
      handleSubmit(); // Call the handleSubmit function to send data to the server
      window.location.href = '/Target';
    }
  };

  const handleSubmit = async () => {
    console.log('Height:', height);

    const dataToSend = {
      height: height,
    };

    try {
      await axios.post(`${import.meta.env.VITE_URL_API}/api/user/update-user-data`, dataToSend, { withCredentials: true });
      console.log('Data sent successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.Bmi1}>
      <p>ส่วนสูงของคุณเท่าไหร่</p>
      <br />
      <div className={styles.inputlabel}>
        <input
          type="number"
          value={height}
          onChange={handleInputChange}
        />
        <label htmlFor="height"> ซม.</label>
      </div>
      <br />

      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 100 ซม. ถึง 300 ซม.</p>

      <Image className={styles['ant-image-img']} src="/public/bmi_img/hight.jpg"
      />
      <div>
        <button className={styles.nextbutton} onClick={handleNextClick}>
          ถัดไป
        </button>
      </div>
      <Link to="/Weight_show">
        <button 
        className={styles.chevronicon} 
        onClick={() => window.location.href = "Weight_show"()}>
          <VscChevronLeft />
        </button>
      </Link>
    </div>
  );
}

export default Height_show;