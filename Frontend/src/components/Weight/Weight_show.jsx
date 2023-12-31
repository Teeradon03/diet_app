import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Bmi/Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weight_show(props) {
  const [weight, setWeight] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setWeight(value);
  };

  const handleSubmit = () => {
    // You can perform any additional actions here before logging to the console
    console.log('Weight:', weight);
  };

  return (
    <div className={styles.Bmi1}>
      <h2>น้ำหนักของคุณเท่าไหร่</h2>
      <br />
      <div className={styles.inputlabel}>
        <input
          type="number"
          value={weight}
          onChange={handleInputChange}
        />
        <label htmlFor="weight"> กก.</label>
      </div>

      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 25 กก. ถึง 300 กก.</p>

      <Image
        width={300}
        height={300}
        src="/public/w1.jpg"
      />
      <div>
        <Link to="/BMI_calculator">
          <button className={styles.nextbutton} onClick={handleSubmit}>
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
