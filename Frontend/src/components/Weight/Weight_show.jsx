import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from "../Bmi/Bmi.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Weight_show(props) {
  const [weight, setWeight] = useState('');
  const pageId = '45'; // ระบุ ID ที่ต้องการให้เป็นไปตามความต้องการ

  const handleInputChange = (e) => {
    const value = e.target.value;
    setWeight(value);
  };

  const handleSubmit = async () => {
    console.log("Weight:", weight);

    const dataToSend = {
      questionId: pageId, // เพิ่ม ID ลงในข้อมูลที่จะส่ง
      weight: weight
    };

    await axios.post('http://localhost:9999/api/form/create-questionnaires', dataToSend, {dataToSend,witCredentials:true})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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

      <Image className={styles['ant-image-img']} src="/public/bmi_img/weight.jpg" />
      <div>
        <button className={styles.nextbutton} onClick={handleNextClick}>
          ถัดไป
        </button>
      </div>
      <Link to="/Calendar_1">
        <button 
        className={styles.chevronicon} 
        onClick={() => window.location.href = "Calendar_1"()}>
          <VscChevronLeft />
        </button>
      </Link>
    </div>
  );
}

export default Weight_show;