import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Bmi/Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Weight_show(props) {
  const [weight, setWeight] = useState('');
  const questionId = '45'; // Change the questionId accordingly

  const handleInputChange = (e) => {
    const value = e.target.value;
    setWeight(value);
  };

  const handleNextClick = () => {
    if (weight.trim() === '' || weight < 25 || weight > 300) {
      alert('กรุณากรอกน้ำหนักให้ถูกต้อง (25-300 กก.)');
    } else {
      console.log('Weight:', weight);
      handleSubmit(); // Call the handleSubmit function to send data to the server
      window.location.href = '/Height_show';
    }
  };

  const handleSubmit = async () => {
    console.log('Weight:', weight);

    const dataToSend = {
      questionId: questionId,
      weight: weight,
    };

    try {
      await axios.post('http://localhost:9999/api/create-questionnaires', dataToSend, { witCredentials: true });
      console.log('Data sent successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.Bmi1}>
      <p>น้ำหนักของคุณเท่าไหร่</p>
      <br />
      <div className={styles.inputlabel}>
        <input
          type="number"
          value={weight}
          onChange={handleInputChange}
        />
        <label htmlFor="weight">&nbsp; กก.</label>
      </div>
      <br />

      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 25 กก. ถึง 300 กก.</p>

      <Image
        width={300}
        height={300}
        src="/public/w1.jpg"
      />
      <div>
        <button className={styles.nextbutton} onClick={handleNextClick}>
          ถัดไป
        </button>
      </div>
      <Link to="/Calendar_1">
        <div className={styles.chevronicon}>
          <Button
            className={styles.button}
            shape="circle"
            icon={<VscChevronLeft />}
          />
        </div>
      </Link>
    </div>
  );
}

export default Weight_show;
