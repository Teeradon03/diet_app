import React from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi_normalweight() {
  const boldTextStyle = { fontWeight: 'bold' };

  return (
    <div>
      <div className={styles.Bmi1}>
        <h1 style={boldTextStyle}>ค่าดัชนีมวลกาย (BMI)</h1>
        <Image className='ant-image-img' width="60%" src="/public/10.jpg" /><br />
        <div className={styles.childbmi} style={boldTextStyle}>BMI  18.50 - 22.90</div>
        <div className={styles.childbmi} style={boldTextStyle}>อยู่ในเกณฑ์   น้ำหนักปกติ</div>
        <div className={styles.childbmi} style={boldTextStyle}>ภาวะเสี่ยงต่อโรค   เท่ากับคนปกติ</div>
        <br />

        <div>
          <Link to="/Advice_normalweight">
            <button className={styles.advicebutton} style={boldTextStyle}>คำแนะนำ</button>
          </Link>

          <Link to="/">
            <button className={styles.nextbutton} style={boldTextStyle}>ถัดไป</button>
          </Link>
        </div>
      </div>
      <div className={styles.chevronicon}>
        <Link to="/BMI_calculator">
          <Button
            shape="circle"
            style={{ left: 10, top: 10, fontSize: '22px', width: '50px', height: '50px', fontWeight: 'bold' }}
            icon={<VscChevronLeft />}
          />
        </Link>
      </div>
    </div>
  );
}

export default Bmi_normalweight;
