import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Advice.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Advice_normalweight() {


  return (
    <div>
      <div className={styles.Bmi1}>
        <br/>
        <p>คำแนะนำค่าดัชนีมวลกาย (BMI)</p>

        <br />
        <div className={styles.childadvice}>
          <p>1. ระวังเรื่องคุณภาพของอาหารที่กินเข้าไปด้วย เลือกกินอาหารที่ดี มีประโยชน์ ลดหวาน มัน เค็ม </p>
          <p>2. เลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีนเพื่อช่วยในการ เสริมสร้างกล้ามเนื้อ หากต้องการเพิ่ม น้ำหนัก ให้ไม่ผอมจนเกินไป ให้เพิ่ม ปริมาณการกินอาหารประมาณ 300-500 กิโลแคลอรี</p>
          <p>3. ออกกำลังกายสม่ำเสมอระดับความ หนักปานกลางโดยเลือกกิจกรรมการ ออกกำลังกายที่ชื่นชอบและ สนุกสนาน เพื่อส่งเสริมให้อยากออกกำลังกาย ลดความเบื่อหน่าย</p>
        </div>
        <br />

        <div>
          <Link to="/Bmi_normalweight"className={styles.link} >
            <button className={styles.backbutton}>ย้อนกลับ </button>
          </Link>
        </div>
      </div>
      
      <Link to="/Bmi_normalweight">
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

export default Advice_normalweight;