import React, { useState } from 'react';
import styles from '../Bmi/Bmi.module.css';

function Weight(props) {
  const [weight, setWeight] = useState('0');

  const handleInputChange = (event) => {
    const value = event.target.value;

    // ตรวจสอบว่าค่าที่ผู้ใช้ป้อนเข้ามาไม่น้อยกว่า 0
    if (value >= 0) {
      setWeight(value);
      props.onWeightChange(value);
    }
  };

  const boldTextStyle = {
    fontWeight: 'bold', // Set the fontWeight to 'bold'
  };

  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };

  return (
    <div className={styles.Bmi1}>
      <br/>
      <h2>น้ำหนักตัว (กก.)</h2>
      <input 
        type="number"
        value={weight}
        onChange={handleInputChange}
        style={boldTextStyle} // Apply boldTextStyle to the input as well
      />
    </div>
  );
}

export default Weight;
