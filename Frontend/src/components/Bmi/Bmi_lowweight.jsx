import React from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi_lowweight() {
  return (
    <div>
      <div className={styles.Bmi1}>
        <h1><strong>ค่าดัชนีมวลกาย (BMI)</strong></h1>
        <br />
        <Image className='ant-image-img' width="60%" src="/public/10.jpg" />
        <br />
        <div className={styles.childbmi}><strong>BMI น้อยกว่า 18.50</strong></div>
        <div className={styles.childbmi}><strong>อยู่ในเกณฑ์ น้ำหนักน้อย/ผอม</strong></div>
        <div className={styles.childbmi}><strong>ภาวะเสี่ยงต่อโรค มากกว่าคนปกติ</strong></div>
        <br />

        <div>
          <Link to="/Advice_lowweight">
            <button className={styles.advicebutton}><strong>คำแนะนำ</strong></button>
          </Link>

          <Link to="/">
            <button className={styles.nextbutton}><strong>ถัดไป</strong></button>
          </Link>
        </div>
        <div className={styles.chevronicon}>
          <Link to="/BMI_calculator">
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

export default Bmi_lowweight;