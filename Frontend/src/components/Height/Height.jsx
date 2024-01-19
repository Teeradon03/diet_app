import React, { useState } from 'react';
import styles from '../Bmi/Bmi.module.css';

function Height(props) {
  const [height, setHeight] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (value >= 0) {
      setHeight(value);
      props.onHeightChange(value);
    }
  };

 

  return (
    <div className={styles.Bmi1}>
      <p>ส่วนสูง (ซม.)</p>
      <input
        type="number"
        value={height}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Height;