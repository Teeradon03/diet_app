import { useState } from 'react';
import { Image, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
// import styles from '../Bmi/Bmi.module.css';
import styles from './Target.module.css';
import axios from 'axios';

function Target() {
  const [targetWeight, setTargetWeight] = useState('');
  const navi = useNavigate()
  const handleInputChange = (e) => {
    const value = e.target.value;
    setTargetWeight(value);
  };

  const handleNextClick = () => {
    if (targetWeight.trim() === '' || targetWeight < 25 || targetWeight > 300) {
      alert('กรุณากรอกน้ำหนักเป้าหมายของคุณให้ถูกต้อง (25-300 กก.)');
    } else {
      // console.log('Target Weight:', targetWeight);
      handleSubmit(); // Call the handleSubmit function to send data to the server
      navi('/BMI_calculator')
    }
  };


  const handleSubmit = async () => {
    // console.log('Target Weight:', targetWeight);

    const dataToSend = {
      targetWeight: targetWeight,
    };

    const response = await axios.post(`${import.meta.env.VITE_URL_API}/api/user/update-user-data`, dataToSend, { withCredentials: true})

  };

  return (
    <div className={styles.Bmi1}>
      <h1 className={styles.Bmi1}>น้ำหนักเป้าหมายของคุณเท่าไหร่</h1>
      
      <div className={styles.inputlabel}>

        <input className={styles.inputlabel}
          type="number"
          value={targetWeight}
          onChange={handleInputChange}
        />
        <label htmlFor="target">&nbsp; กก.</label>

      </div>

      <h2>โปรดป้อนค่าตั้งแต่ &nbsp; 25 กก. ถึง 300 กก.</h2>
      <br />

      <Image className={styles['ant-image-img']} src="/bmi_img/taget.jpg" alt='target_weight'/>
      <div>
        {/* Change onClick to handleNextClick */}
        <button className={styles.nextbutton} onClick={handleNextClick}>
          ถัดไป
        </button>
      </div>
      <Link to="/Height_show">
        <button 
        className={styles.chevronicon} 
        onClick={() => navi("/Height_show")}>
          <VscChevronLeft />
        </button>
      </Link>
    </div>
  );
}

export default Target;