import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Advice.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Advice_obesitylevel3() {
  

  return (
    <div>
      <div className={styles.Bmi1}>
        <p>คำแนะนำค่าดัชนีมวลกาย (BMI)</p>

        <br />
        <div className={styles.childadvice}>
          <p>1. รับประทานอาหารในปริมาณที่เหมาะสม และหลีกเลี่ยงการบริโภคอาหารใน ปริมาณมากเกินไป</p>
          <p>2. ลดการบริโภคอาหารที่มีความสูงใน โปรตีนที่ไม่ดีเช่นอาหารหมักหรืออาหาร จางๆ และหลีกเลี่ยงอาหารหรือเครื่องดื่ม ที่มีความสูงในน้ำตาลและไขมัน</p>
          <p>3. ระบุเป้าหมายการลดน้ำหนักหรือควบคุมน้ำหนัก เพื่อลดความเสี่ยงต่อโรคร้าย ต่างๆ ควรทำการลดน้ำหนักอย่าง ช้าๆ และด้วยวิธีที่ยั่งยืน</p>
          <p>4. เลือกกินให้มากๆ ลดอาหารหวาน ของหวาน ขนม เครื่องดื่มที่มีน้ำตาล งด หรือหลีกเลี่ยงของทอด อาหารไขมันสูง</p>
        </div>
        <br />

        <div>
          <Link to="/Bmi_obesitylevel3"className={styles.link}>
            <button className={styles.backbutton}>ย้อนกลับ</button>
          </Link>
        </div>
      </div>
      <div className={styles.chevronicon}>
        <Link to="/Bmi_obesitylevel3">
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

export default Advice_obesitylevel3;