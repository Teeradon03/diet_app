import React from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi_obesitylevel1() {
    return (
        <div>
          
            <div className={styles.Bmi1}>
            <h1> ค่าดัชนีมวลกาย (BMI) </h1>
            <br />
            < Image className='ant-image-img'
              width="60%"
              src="/public/bmi_img/obesity1.jpg"
            /><br />
            <div className={styles.childbmi}>BMI  23 - 24.90</div>
            <div className={styles.childbmi}>อยู่ในเกณฑ์   อ้วน/อ้วนระดับ 1</div>
            <div className={styles.childbmi}>ภาวะเสี่ยงต่อโรค   อันตรายระดับ 1</div>
            <br />
    
            <div >
              <Link to="/Advice_obesitylevel1"className={styles.link}>
              <button className={styles.advicebutton}>คำแนะนำ</button> 
              </Link>
            
            
            <Link to="/"className={styles.link}> 
            <button className={styles.nextbutton}>ถัดไป</button> 
              </Link>
            </div>
          </div>
          <Link to="/BMI_calculator">
         <div className={styles.chevronicon}>
        <Button
          className={styles.button}
          shape="circle"
          icon={<VscChevronLeft />}
        />
      </div>
    </Link>
        </div>
      )
    }

export default Bmi_obesitylevel1;