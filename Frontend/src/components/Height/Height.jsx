import React, { useState } from 'react';
import styles from '../Bmi/Bmi.module.css';

function Height(props) {
  const [height, setHeight] = useState('0');

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (value >= 0) {
      setHeight(value);
      props.onHeightChange(value);
    }
  };

  return (
    <div className={styles.Bmi1}>
      <h2>ส่วนสูง (ซม.)</h2>
      <input
        type="number"
        value={height}
        onChange={handleInputChange}
        style={boldTextStyle} // Apply boldTextStyle to the input as well
      />
    </div>
  );
}

export default Height;
