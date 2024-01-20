import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi_normalweight() {
    return (
      <div>
           <div className={styles.Bmi1}>
          <p> ค่าดัชนีมวลกาย (BMI) </p>
          < Image className='ant-image-img'
            width="80%"
            src="/public/bmi_img/normal.jpg"
          /><br />
          <div className={styles.childbmi}>BMI  18.50 - 22.90</div>
          <div className={styles.childbmi}>อยู่ในเกณฑ์   น้ำหนักปกติ</div>
          <div className={styles.childbmi}>ภาวะเสี่ยงต่อโรค   เท่ากับคนปกติ</div>
          <br />
  
          <div >
            <Link to="/Advice_normalweight"className={styles.link}>
            <button className={styles.advicebutton}>คำแนะนำ</button> 
            </Link>
          

          
          <Link to="/BMR_calculator"className={styles.link}> {/* Changed the route for the "No" response */}
          <button className={styles.nextbutton}>ถัดไป</button> 
            </Link>

            <div className={styles.Bmi1}>
            <h1> ค่าดัชนีมวลกาย (BMI) </h1>
            <br/> 
            < Image className='ant-image-img'
              width="60%"
              src="/public/bmi_img/normal.jpg"
            /><br />
            <div className={styles.childbmi}>BMI  23 - 24.90</div>
            <div className={styles.childbmi}>อยู่ในเกณฑ์   อ้วน/อ้วนระดับ 1</div>
            <div className={styles.childbmi}>ภาวะเสี่ยงต่อโรค   อันตรายระดับ 1</div>
            <br />
    
            <div >
              <Link to="/Advice_normalweight"className={styles.link}>
              <button className={styles.advicebutton}>คำแนะนำ</button> 
              </Link>
            
            
            <Link to="/"className={styles.link}> 
            <button className={styles.nextbutton}>ถัดไป</button> 
              </Link>
            </div>

          </div>
        </div>
        <Link to="/BMI_calculator">
        <button
          className={styles.chevronicon}
          onClick={() => (window.location.href = "BMI_calculator"())}
        >
          <VscChevronLeft />
        </button>
      </Link>
    </div>
  </div>
  );
}

export default Bmi_normalweight;