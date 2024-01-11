import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Bmi/Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios  from 'axios'

function Weight_show(props) {
  const [weight, setWeight] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setWeight(value);
  };

  const handleSubmit = async () => {
    console.log('Weight:', weight);
    await axios.post('http://localhost:9999/api/create-questionnaires', weight)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };

  return (
    <div className={styles.Bmi1}>
      <h2 style={buttonStyle}>น้ำหนักของคุณเท่าไหร่</h2>
      <br />
      <div className={styles.inputlabel}>
        <input
          type="number"
          value={weight}
          onChange={handleInputChange}
        />
        <label htmlFor="weight"> กก.</label>
      </div>

      <p style={buttonStyle} >โปรดป้อนค่าตั้งต้นตั้งแต่ 25 กก. ถึง 300 กก.</p>

      <Image
        width={300}
        height={300}
        src="/public/w1.jpg"
      />
      <div>
        <Link to="/BMI_calculator">
          <button className={styles.nextbutton} 
                  onClick={handleSubmit}
                  style={buttonStyle}
            >
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
