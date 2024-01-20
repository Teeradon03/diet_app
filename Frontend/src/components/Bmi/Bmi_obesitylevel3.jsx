import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi_obesitylevel3() {
    return (
        <div>
            <div className={styles.Bmi1}>
            <p> ค่าดัชนีมวลกาย (BMI) </p>
            < Image className='ant-image-img'
              width="80%"
              src="/public/bmi_img/obesity3.jpg"
            /><br />
            <div className={styles.childbmi}>BMI  มากกว่า 30</div>
            <div className={styles.childbmi}>อ้วนมาก / โรคอ้วนระดับ 3</div>
            <br />
    
            <div >
              <Link to="/Advice_obesitylevel3"className={styles.link}>
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
      )
    }

export default Bmi_obesitylevel3;
