import React from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Advice.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Advice_lowweight() {
  

  return (
    <div>
      <div className={styles.Bmi1}>
        <p >คำแนะนำค่าดัชนีมวลกาย (BMI)</p>

        <br />
        <img className={styles.ant_image_img}
              width="35%"
              src="/bmi_img/lowweight.jpg">
        </img>
        <br />

        <div className={styles.childadvice} >
          <p>1. ระวังเรื่องคุณภาพของอาหารที่กินเข้าไป</p>
          <p>2. เลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีนเพื่อช่วยในการเสริมสร้างกล้ามเนื้อ</p>
          <p>3. ออกกำลังกายสม่ำเสมอ โดยเลือกกิจกรรมการออกกำลังกายที่ชื่นชอบ</p>
        </div>
        <br />

        <div>
          <Link to="/Bmi_lowweight"className={styles.link}>
            <button className={styles.backbutton} >ย้อนกลับ</button>
          </Link>
        </div>
      </div>
      <Link to="/Bmi_lowweight">
         <div className={styles.chevronicon}>
        <Button
          className={styles.button}
          shape="circle"
          icon={<VscChevronLeft />}
        />
       </div>
    </Link>
    </div>
  );
}

export default Advice_lowweight;