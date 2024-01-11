import React, { useState } from 'react';
import styles from'../Bmi/Bmi.module.css'

function Height(props) {
  const [height, setHeight] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (value >= 0) {
      setHeight(value); // เปลี่ยน setWeight เป็น setHeight
      props.onHeightChange(value); // แก้ props.onWeightChange เป็น props.onHeightChange
    }
  };

  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };

  return (
    <div className={styles.Bmi1}>
      <h2 style={buttonStyle}>ส่วนสูง (ซม.)</h2>
      <input
        type="number"
        value={height}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Height;
