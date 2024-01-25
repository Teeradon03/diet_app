
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi_lowweight() {
    return (
        <div>
            <div className={styles.Bmi1}>
            <p> ค่าดัชนีมวลกาย (BMI) </p>
            <br/>
            < Image className='ant-image-img'
              width="80%"
              src="/bmi_img/lowweight.jpg"
              alt='bmi_low_weight'
            />
            <br />
            <div className={styles.childbmi}>BMI น้อยกว่า 18.50</div>
            <div className={styles.childbmi}>น้ำหนักน้อย / ผอม</div>
            <br />
    
            <div >
              <Link to="/Advice_lowweight"className={styles.link}>
                <button className={styles.advicebutton}>คำแนะนำ</button> 
              </Link>
            
            
            <Link to="/BMR_calculator"className={styles.link}> 
                <button className={styles.nextbutton}>ถัดไป</button> 
              </Link>
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
  );
}

export default Bmi_lowweight;