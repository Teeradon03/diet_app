import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Bmi/Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Weight_show(props) {
  const [weight, setWeight] = useState('');
  const pageId = '34'; // ระบุ ID ที่ต้องการให้เป็นไปตามความต้องการ

  const handleInputChange = (e) => {
    const value = e.target.value;
    setWeight(value);
  };

  const handleSubmit = async () => {
    console.log('Weight:', weight);

    const dataToSend = {
      questionId: pageId, // เพิ่ม ID ลงในข้อมูลที่จะส่ง
      weight: weight
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
    <div className={styles.Bmi1} id={pageId}>
      <h1 style={boldTextStyle}>น้ำหนักของคุณเท่าไหร่</h1>
      <br />
      <div className={styles.inputlabel}>
        <input
          type="number"
          value={weight}
          onChange={handleInputChange}
        />
        <label htmlFor="weight" style={boldTextStyle}> กก.</label>
      </div>

      <p style={boldTextStyle}>โปรดป้อนค่าตั้งต้นตั้งแต่ 25 กก. ถึง 300 กก.</p>

      <Image
        width={300}
        height={300}
        src="/public/w1.jpg"
      />
      <div>
        <Link to="/BMI_calculator">
          <button className={styles.nextbutton} onClick={handleSubmit} style={boldTextStyle}>
            ถัดไป
          </button>
        </Link>
      </div>
      <div className={styles.chevronicon}>
        <Link to="/Height_show">
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

export default Weight_show;
