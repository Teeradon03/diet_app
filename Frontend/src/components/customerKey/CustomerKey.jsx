import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../customerKey/CustomerKey.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerKey = () => {
  const [formData, setFormData] = useState({
    CustomerID: '',
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
    // ตรวจสอบว่าข้อมูลถูกต้องหรือไม่
    if (formData.CustomerID.trim() === '') {
      alert('กรุณากรอกรหัสลูกค้า');
    } else {
      alert("อยู่ระหว่างการปรับปรุง  ขออภัยในความไม่สะดวก ครับ/ค่ะ")
      // window.location.href = '/';
    }
  };

  return (
    <div className='Bmi1'>
      <div className={styles.Bmi1}>
        <h1 className='fw-bold'>กรอกรหัสลูกค้า</h1>
        
        <div className='Bmi1 '>
          <br />
          <h4>โปรดระบุรหัสที่ถูกต้อง</h4>
          <br />
          <div className={styles.inputv1}>
            <input
              type="text"
              placeholder="nanoX123456"
              value={formData.CustomerID}
              onChange={(e) => handleInputChange('CustomerID', e.target.value)}
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
          {/* เพิ่ม onClick เพื่อเรียกใช้ handleNextClick */}
          <button className={styles.performbutton} onClick={handleNextClick}>
            ถัดไป
          </button>
        </div>
      </div>
      
      <Link to="/ever">
        <button 
        className={styles.chevronicon} 
       >
          <VscChevronLeft />
        </button>
      </Link>
      </div>
  );
};

export default CustomerKey;