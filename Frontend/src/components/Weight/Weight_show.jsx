import  { useState } from 'react';
import { Image, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from "../Bmi/Bmi.module.css";
import axios from "axios";

function Weight_show(props) {
  const [weight, setWeight] = useState('');
  const navi = useNavigate()

  const handleInputChange = (e) => {
    const value = e.target.value;
    setWeight(value);
  };

  const handleNextClick = () => {
    if (weight.trim() === '' || weight < 25 || weight > 300) {
      alert('กรุณากรอกน้ำหนักให้ถูกต้อง (25-300 กก.)');
    } else {
      // console.log('Weight:', weight);
      handleSubmit(); // Call the handleSubmit function to send data to the server
      navi('/Height_show')
    }
  };

  const handleSubmit = async () => {
    // console.log("Weight:", weight);

    const dataToSend = {
      weight: weight,
    };

    try {
      await axios.post(`${import.meta.env.VITE_URL_API}/api/user/update-user-data`, dataToSend, { withCredentials: true });
      // console.log('Data sent successfully');
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className={styles.Bmi1}>
      <h1 className={styles.Bmi1}>น้ำหนักของคุณเท่าไหร่</h1>
      <div className={styles.inputlabel}>
        <input className={styles.inputlabel}
          type="number"
          value={weight}
          onChange={handleInputChange}
        />
        <label htmlFor="weight">&nbsp; กก.</label>
      </div>
      <br />

      <h2>โปรดป้อนค่าตั้งแต่  &nbsp;  25 กก. ถึง 300 กก.</h2>

      <Image className={styles['ant-image-img']} src="/bmi_img/weight.jpg" alt='weight image'/>
      <div>
        <button className={styles.nextbutton} onClick={handleNextClick}>
          ถัดไป
        </button>
      </div>
      <Link to="/Calendar_1">
        <button 
        className={styles.chevronicon} 
        onClick={() => navi("/Calendar_1")}>
          <VscChevronLeft />
        </button>
      </Link>
    </div>
  );
}

export default Weight_show;