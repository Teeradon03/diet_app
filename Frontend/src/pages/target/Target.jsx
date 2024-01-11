import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Target.module.css';
import axios from 'axios';

function Target() {
  const [targetWeight, setTargetWeight] = useState('');
  const questionId = '32';

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTargetWeight(value);
  };
  
  const handleSubmit = async () => {
    console.log('Target Weight:', targetWeight);

    const dataToSend = {
      questionId: questionId,
      targetWeight: targetWeight,
    };

    await axios.post('http://localhost:9999/api/create-questionnaires', dataToSend)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const boldTextStyle = {
    fontWeight: 'bold', // Set the fontWeight to 'bold'
  };

  return (
    <div className={styles.Bmi1}>
      <h1 style={boldTextStyle}>น้ำหนักเป้าหมายของคุณเท่าไหร่</h1>
      <br />
      <div className={styles.inputlabel}>
        <input
          type="number"
          value={targetWeight}
          onChange={handleInputChange}
        />
        <label htmlFor="target" style={boldTextStyle}> กก.</label>
      </div>

      <p style={boldTextStyle}>โปรดป้อนค่าตั้งต้นตั้งแต่ 25 กก. ถึง 300 กก.</p>

      <Image
        width={300}
        height={300}
        src="/public/t1.jpg"
      />
      <div>
        <Link to="/Height_show">
          <button className={styles.nextbutton} onClick={handleSubmit} style={boldTextStyle}>
            ถัดไป
          </button>
        </Link>
      </div>
      <div className={styles.chevronicon}>
        <Link to="/Calendar_1">
          <Button
            shape="circle"
            style={{ left: 10, top: 10, fontSize: '22px', width: '50px', height: '50px' }}
            icon={<VscChevronLeft />}
          />
        </Link>
      </div>
    </div>
  );
}

export default Target;
