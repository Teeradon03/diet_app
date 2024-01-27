import  { useState } from 'react';
import {  Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Name/Name.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import Axios

function Name() {
  const [formData, setFormData] = useState({
    firstName: '',
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
    // console.log('Form Data:', formData);
    // Send data using Axios
    const response = axios.post(`${import.meta.env.VITE_URL_API}/api/user/update-user-data`, formData, { withCredentials: true})

  };

  return (
    <div className=''>
      <div className={styles.Bmi1} >
      <br />
        <p>กรุณากรอกข้อมูลดังนี้</p>
        <div className='body '>
          <div className={styles.inputv1}>
            <input
              type="text"
              placeholder="ชื่อ"
              onChange={(e) => handleInputChange('firstName', e.target.value)}
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
          <Link to="/Question" className={styles.link}>
            <button className={styles.nextbutton} onClick={handleNextClick}>
              ถัดไป
            </button>
          </Link>
        </div>
        <div className={styles.chevronicon}>
          <Link to="/Form">
            <Button
              shape="circle"
              style={{ left: 10, top: 10, fontSize: '22px', width: '50px', height: '50px' }}
              icon={<VscChevronLeft />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Name;