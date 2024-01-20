import React, { useState } from 'react';
import styles from '../Bmi/Bmi.module.css';

function Weight(props) {
  const [weight, setWeight] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;

    // ตรวจสอบว่าค่าที่ผู้ใช้ป้อนเข้ามาไม่น้อยกว่า 0
    if (value >= 0) {
      setWeight(value);
      props.onWeightChange(value);
    }
  };


  return (
    <div className={styles.Bmi1}>
      
      <p>น้ำหนักตัว (กก.)</p>
      <input
        type="number"
        value={weight}
        onChange={handleInputChange}
        
      />
    </div>
  );
}

export default Weight;