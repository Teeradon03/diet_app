import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../customerKey/CustomerKey.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerKey = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    productType: 'product',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      productType: e.target.value,
    });
  };

  const handleNextClick = () => {
    // เพิ่มโค้ดที่ต้องการทำหลังจากคลิกปุ่ม "ถัดไป" ที่นี่
  };

  return (
    <div className='Bmi1'>
      <div className={styles.Bmi1}>
        <p>กรอกรหัสลูกค้า</p>
        <br />
        <div className='Bmi1 '>
        <p>โปรดระบุรหัสที่ถูกต้อง</p>
          <div className={styles.inputv1}>
            <input
              type="text"
              placeholder="nanoX123456"
              value={formData.firstname}
              onChange={(e) => handleInputChange('firstname', e.target.value)}
            />
          </div>

          <div className={styles.productType}>
            <select value={formData.productType} onChange={handleSelectChange}>
              <option value="product">ผลิตภัณฑ์ที่คุณได้รับ</option>
              <option value="nanoVA">nanoVA</option>
              <option value="nanoX2">nanoX2</option>
            </select>
          </div>
        </div>

        <div>
          <Link to="/Question" className={styles.link}>
            <button className={styles.performbutton} onClick={handleNextClick}>
            ดำเนินการต่อ
            </button>
          </Link>
        </div>
        <div className={styles.chevronicon}>
          <Link to="/BMR_calculator">
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
};

export default CustomerKey;
