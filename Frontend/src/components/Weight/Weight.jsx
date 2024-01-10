import React, { useState } from 'react';
import styles from'../Bmi/Bmi.module.css'

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

  const handleSubmit = () => {
    console.log('น้ำหนักที่ผู้ใช้ป้อน:', weight);
  };

  return (
    <div className={styles.Bmi1}>
      <br/>
      <h2>น้ำหนักตัว (กก.)</h2>
      <input 
        type="number"
        value={weight}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Weight;
