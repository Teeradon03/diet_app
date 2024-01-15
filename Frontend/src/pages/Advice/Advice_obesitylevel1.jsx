import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Advice.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Advice_obesitylevel1() {
  

  return (
    <div>
      <div className={styles.Bmi1}>
        <p>คำแนะนำค่าดัชนีมวลกาย (BMI)</p>

        <br />
        <div className={styles.childadvice} >
          <p>1. รับประทานอาหารในปริมาณที่เหมาะสม และหลีกเลี่ยงการบริโภคอาหารใน ปริมาณมากเกินไป</p>
          <p>2. ออกกำลังกายอย่างสม่ำเสมอ อาจช่วย ลดน้ำหนักสร้างกล้ามเนื้อ และเพิ่มระดับ พลังงานในร่างกาย</p>
          <p>3. ระบุเป้าหมายการลดน้ำหนักหรือควบคุมน้ำหนักเพื่อ ลดความเสี่ยงต่อโรคร้าย ต่างๆ ควรทำการลดน้ำหนักอย่าง ช้าๆ และด้วยวิธีที่ยั่งยืน</p>
          <p>4. การปรึกษากับหมอหรือโภชนาการจะ ช่วยในการกำหนดแผนการรักษาและการดูแลสุขภาพที่เหมาะสมสำหรับคุณ</p>
          <p>5. ความเครียดและข้อกังวลอาจมีผลต่อการควบคุมน้ำหนักและสุขภาพดังนั้นควร รักษาสุขภาพใจด้วยการปฏิบัติสิ่งที่ ทำให้คุณรู้สึกผ่อนคลาย</p>
        </div>
        <br />

        <div>
          <Link to="/Bmi_obesitylevel1"className={styles.link}>
            <button className={styles.backbutton}>ย้อนกลับ</button>
          </Link>
        </div>
      </div>
      <div className={styles.chevronicon}>
        <Link to="/Bmi_obesitylevel1">
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

export default Advice_obesitylevel1;