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
          <div className={styles.childbmi}>BMI 18.50 - 22.90</div>
          <div className={styles.childbmi}>ปกติ (สุขภาพดี)</div>
          <br />
  
          <div >
            <Link to="/Advice_normalweight"className={styles.link}>
            <button className={styles.advicebutton}>คำแนะนำ</button> 
            </Link>
          
          
          <Link to="/BMR_calculator"className={styles.link}> {/* Changed the route for the "No" response */}
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
  );
}

export default Bmi_normalweight;