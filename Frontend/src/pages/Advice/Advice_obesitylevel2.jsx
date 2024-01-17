import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Advice.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Advice_obesitylevel2() {
  

  return (
    <div>
      <div className={styles.Bmi1}>
        <p>คำแนะนำค่าดัชนีมวลกาย (BMI)</p>

        <br />
        <div className={styles.childadvice} >
          <p>1. ควบคุมปริมาณแคลอรี่ที่คุณบริโภคและ รับประทานอาหารที่มีสารอาหารครบถ้วน,รวมถึงผักผลไม้, โปรตีนคุณภาพสูง</p>
          <p>2. เพิ่มการออกกำลังกายในชีวิตประจำวัน เช่น การเดิน, วิ่ง,หรือการออกกำลังกาย อื่นๆ เพื่อช่วยเสริมสร้างกล้ามเนื้อ และเสริมสุขภาพทั่วไป</p>
          <p>3. รับประทานอาหารที่มีค่าโภชนาการ สมดุลเพิ่มการบริโภค ผักผลไม้, แป้งธัญพืชเต็มเม็ด, โปรตีนคุณภาพ และลดการบริโภคอาหารที่มีปริมาณ น้ำตาลและไขมันสูง</p>
          <p>4. สุขภาพจิตมีผลต่อสุขภาพร่างกายดังนั้นควรดูแลสุขภาพ จิตอย่างดี</p>
          <p>5. ควบคุมน้ำหนักอย่างรอบคอบให้ทำไป อย่างรอบคอบและทำตามคำแนะนำ จากนักโภชนาการหรือหมอ</p>
        </div>
        <br />

        <div>
          <Link to="/Bmi_obesitylevel2"className={styles.link}>
            <button className={styles.backbutton}>ย้อนกลับ</button>
          </Link>
        </div>
      </div>
      
      <Link to="/Bmi_obesitylevel2">
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

export default Advice_obesitylevel2;
