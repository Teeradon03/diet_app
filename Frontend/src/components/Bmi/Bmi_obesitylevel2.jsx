import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from './Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bmi_obesitylevel2() {
    return (
        <div>
            <div className={styles.Bmi1}>
            <p> ค่าดัชนีมวลกาย (BMI) </p>
            < Image className='ant-image-img'
              width="60%"
              src="/10.jpg"
            /><br />
            <div className={styles.childbmi}>BMI  25 - 29.90</div>
            <div className={styles.childbmi}>อยู่ในเกณฑ์   อ้วน/อ้วนระดับ 2</div>
            <div className={styles.childbmi}>ภาวะเสี่ยงต่อโรค   อันตรายระดับ 2</div>
            <br />
    
            <div >
              <Link to="/Advice_obesitylevel2"className={styles.link}>
              <button className={styles.advicebutton}>คำแนะนำ</button>
              </Link>
            
            
            <Link to="/"className={styles.link}> {/* Changed the route for the "No" response */}
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

export default Bmi_obesitylevel2;