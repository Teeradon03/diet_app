import React from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Advice.module.css';


function Advice_obesitylevel3() {
  

  return (
    <div>
      <div className={styles.Bmi1}>
      <br/>
        <p>คำแนะนำค่าดัชนีมวลกาย (BMI)</p>

        <img className={styles.ant_image_img}
              src="/bmi_img/obesitylevel3.jpg">
        </img>
        <br />

        <br />
        <div className={styles.childadvice}>
          <p>1. รับประทานอาหารในปริมาณที่เหมาะสม และหลีกเลี่ยงการบริโภคอาหารใน ปริมาณมากเกินไป</p>
          <p>2. ลดการบริโภคอาหารที่มีความสูงใน โปรตีนที่ไม่ดีเช่นอาหารหมัก</p>
          <p>3. ระบุเป้าหมายการลดน้ำหนักหรือควบคุมน้ำหนัก เพื่อลดความเสี่ยงต่อโรคร้าย ต่างๆ</p>
          <p>4. ลดอาหารหวาน ของหวาน ขนม เครื่องดื่มที่มีน้ำตาล</p>
        </div>
        <br />

        <div>
          <Link to="/Bmi_obesitylevel3"className={styles.link}>
            <button className={styles.backbutton}>ย้อนกลับ</button>
          </Link>
        </div>
      </div>
      <Link to="/Bmi_obesitylevel3">
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

export default Advice_obesitylevel3;