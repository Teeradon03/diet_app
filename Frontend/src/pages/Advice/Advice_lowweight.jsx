import React from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Advice.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Advice_lowweight() {
  const boldTextStyle = { fontWeight: 'bold' };

  return (
    <div>
      <div className={styles.Bmi1}>
        <h1 style={boldTextStyle}>คำแนะนำค่าดัชนีมวลกาย (BMI)</h1>

        <br />
        <div className={styles.childadvice} style={boldTextStyle}>
          <p>1. ระวังเรื่องคุณภาพของอาหารที่กินเข้าไปด้วย เลือกกินอาหารที่ดี มีประโยชน์ ลดหวาน มัน เค็ม</p>
          <p>2. เลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีนเพื่อช่วยใน การเสริมสร้างกล้าม เนื้อหากต้องการ เพิ่มน้ำหนัก ให้ไม่ผอมจนเกินไปให้เพิ่ม ปริมาณการกินอาหารประมาณ 300-500 กิโลแคลอรี</p>
          <p>3. ออกกำลังกายสม่ำเสมอระดับความ หนักปานกลางโดยเลือกกิจกรรมการ ออกกำลังกายที่ชื่นชอบและ สนุกสนาน เพื่อส่งเสริมให้อยากออกกำลังกาย ลดความเบื่อหน่าย</p>
        </div>
        <br />

        <div>
          <Link to="/Bmi_lowweight">
            <button className={styles.backbutton} style={boldTextStyle}>ย้อนกลับ</button>
          </Link>
        </div>
      </div>
      <div className={styles.chevronicon}>
        <Link to="/Bmi_lowweight">
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

export default Advice_lowweight;
