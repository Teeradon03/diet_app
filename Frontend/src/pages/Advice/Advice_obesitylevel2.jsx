import React from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Advice.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Advice_obesitylevel2() {
  

  return (
    <div>
      <div className={styles.Bmi1}>
      <br/>
        <p>คำแนะนำค่าดัชนีมวลกาย (BMI)</p>

        <Image className='ant-image-img'
              width="35%"
              src="/public/bmi_img/obesitylevel2.jpg">
        </Image>
        <br />

        <br />
        <div className={styles.childadvice} >
          <p>1. ควบคุมปริมาณแคลอรี่ที่คุณบริโภคและ รับประทานอาหารที่มีสารอาหารครบถ้วน</p>
          <p>2. เพิ่มการออกกำลังกายในชีวิตประจำวัน เช่น การเดิน, วิ่ง</p>
          <p>3. ลดการบริโภคอาหารที่มีปริมาณ น้ำตาลและไขมันสูง</p>
          <p>4. สุขภาพจิตมีผลต่อสุขภาพร่างกายดังนั้นควรดูแลสุขภาพจิตให้ดี</p>
          <p>5. ควบคุมน้ำหนักอย่างรอบคอบให้ทำไป อย่างรอบคอบและทำตามคำแนะนำ</p>
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