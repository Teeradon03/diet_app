import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Name/Name.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Name() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    age: '',
    gender: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSelectChange = (event) => {
    handleInputChange('gender', event.target.value);
  };

  const handleNextClick = () => {
    // Display form data in the console
    console.log('Form Data:', formData);

    // Add your logic for navigating to the next page here
  };

  return (
    <div className=''>
      <div className={styles.Bmi1} >
        <h2>กรุณากรอกข้อมูลดังนี้</h2>
        <br />
        <div className='body '>
          <div className={styles.inputv1}>
            <input
              type="text"
              placeholder="ชื่อ"
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>

          <div className={styles.inputv1} >
            <input
              type="text"
              placeholder="นามสกุล"
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </div>

          <div className={styles.inputv1}>
            <input
              type="number"
              placeholder="อายุ"
              onChange={(e) => handleInputChange('age', e.target.value)}
            />
          </div>

          <div className={styles.gender}>
            <select value={formData.gender} onChange={handleSelectChange}>
              <option value="gender">เพศ</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
            </select>
          </div>
        </div>

        <div>
          <Link to="/Question">
            <button className={styles.nextbutton} onClick={handleNextClick}>
              ถัดไป
            </button>
          </Link>
        </div>
        <div className='chevron-icon'>
          <Link to="/">
            <Button
              shape="circle"
              style={{ right: 270, top: 10, fontSize: '22px', width: '50px', height: '50px' }}
              icon={<VscChevronLeft />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Name;
