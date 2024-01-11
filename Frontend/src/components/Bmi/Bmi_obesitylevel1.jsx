import React from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi_obesitylevel1() {
  const boldTextStyle = { fontWeight: 'bold' };

  return (
    <div>
      <div className={styles.Bmi1}>
        <h1 style={boldTextStyle}>ค่าดัชนีมวลกาย (BMI)</h1>
        <Image className='ant-image-img' width="60%" src="/public/10.jpg" /><br />
        <div className={styles.childbmi} style={boldTextStyle}>BMI  23 - 24.90</div>
        <div className={styles.childbmi} style={boldTextStyle}>อยู่ในเกณฑ์   อ้วน/อ้วนระดับ 1</div>
        <div className={styles.childbmi} style={boldTextStyle}>ภาวะเสี่ยงต่อโรค   อันตรายระดับ 1</div>
        <br />

        <div>
          <Link to="/Advice_obesitylevel1">
            <button className={styles.advicebutton} style={boldTextStyle}>คำแนะนำ</button>
          </Link>

          <Link to="/BMR_calculator">
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

export default Bmi_obesitylevel1;