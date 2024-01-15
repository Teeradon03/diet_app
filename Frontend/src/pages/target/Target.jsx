import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Target.module.css';
import axios from 'axios';

function Target() {
  const [targetWeight, setTargetWeight] = useState('');
  const questionId = '43';

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

    await axios.post('http://localhost:9999/api/create-questionnaires', dataToSend, {dataToSend,witCredentials:true})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  

  return (
    <div className={styles.Bmi1}>
      <h1 className={styles.Bmi1}>น้ำหนักเป้าหมายของคุณเท่าไหร่</h1>
      <br />
      <div className={styles.inputlabel}>
        <input
          type="number"
          value={targetWeight}
          onChange={handleInputChange}
        />
        <label htmlFor="target">&nbsp; กก.</label>
      </div>
      <br />

      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 25 กก. ถึง 300 กก.</p>
      <br />

      <Image
        width={300}
        height={300}
        src="/public/t1.jpg"
      />
      <div>
        <Link to="/Height_show"className={styles.link}>
          <button className={styles.nextbutton} onClick={handleSubmit}>
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
