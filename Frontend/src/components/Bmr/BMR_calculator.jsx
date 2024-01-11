import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Bmr/Bmr.module.css';
import Weight from '../Weight/Weight';
import Height from '../Height/Height';
import 'bootstrap/dist/css/bootstrap.min.css';

function BMR_calculator(props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState();
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null); 
  const [currentPage, setCurrentPage] = useState(0);

  const calculateBmr = () => {
    let bmrConstant, genderFactor;

    if (gender === 'male') {
      bmrConstant = 88.362;
      genderFactor = 13.397;
    } else {
      bmrConstant = 447.593;
      genderFactor = 9.247;
    }

    const calculatedBmr = bmrConstant + (genderFactor * weight) + (4.799 * height) - (5.677 * age);
    setBmr(calculatedBmr);
    determinePage(calculatedBmr);
    setButtonText('ไปหน้าถัดไป');
  };

  const determinePage = (calculatedBmr) => {
   
    setCurrentPage(1);  
  };

  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };
  const renderContent = () => {
    const goToNextPage = () => {
      setCurrentPage(1);
    };


    return (
      <div>
        <br/>
        <h1 style={buttonStyle}>คำนวณแคลอรี่ (BMR)</h1>
        
        <Weight onWeightChange={(value) => setWeight(value)} />
        
        <Height onHeightChange={(value) => setHeight(value)} />
        <br/>
       
        <h2 style={buttonStyle}>อายุ (ปี) </h2>
        <div className={styles.inputbmr}>
        < input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
       
        <h2 style={buttonStyle}>เพศ  </h2>
        <div className={styles.gender}>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male" style={buttonStyle}>ชาย</option>
          <option value="female" style={buttonStyle}>หญิง</option>
        </select>
        </div>
        {bmr !== null && (
          <div>
            <br />
            <p style={buttonStyle}> ค่า BMR ของคือ : {bmr.toFixed(2)} </p>
            
          </div>
        )}
        <button className={styles.bmrbutton} onClick={calculateBmr} style={buttonStyle} >คำนวณค่า BMR</button>
        
      </div>
    );
  };

  return <div>{renderContent()}</div>;
}

export default BMR_calculator;
