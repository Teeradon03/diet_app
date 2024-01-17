import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from "../Bmr/Bmr.module.css";
import Weight from "../Weight/Weight";
import Height from "../Height/Height";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function BMR_calculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null); 
  const [currentPage, setCurrentPage] = useState(0);
  const [questionId, setUserId] = useState('47'); // Replace 'yourId' with the desired ID

  
  const calculateBmr = async () => {
    let bmrConstant, genderFactor;

    if (gender === "male") {
      bmrConstant = 88.362;
      genderFactor = 13.397;
    } else {
      bmrConstant = 447.593;
      genderFactor = 9.247;
    }

    const calculatedBmr =
      bmrConstant + genderFactor * weight + 4.799 * height - 5.677 * age;
    setBmr(calculatedBmr);
    determinePage(calculatedBmr);
    console.log('Calculated BMR:', calculatedBmr);

    // Send BMR and ID to the server
    const dataToSend = {
      bmr: calculatedBmr,
    };

    await axios.post('http://localhost:9999/api/create-questionnaires', dataToSend, {dataToSend,witCredentials:true})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const determinePage = (calculatedBmr) => {
    setCurrentPage(1);
  };

  const renderContent = () => {
    

    return (
      <div className={styles.Bmr1}>
        <br />
        <p>คำนวณแคลอรี่ (BMR)</p>

        <Weight onWeightChange={(value) => setWeight(value)} />

        <Height onHeightChange={(value) => setHeight(value)} />
        

        <p className={styles.age}>อายุ (ปี)</p>
        <div className={styles.inputbmr}>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <p className={styles.genderv1}>เพศ</p>
        <div className={styles.gender}>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
          </select>
        </div>
        {bmr !== null && (
          <div>
            <br />
            <p>ค่า BMR ของคุณคือ: {bmr.toFixed(2)}</p>
          </div>
        )}
        <button className={styles.bmrbutton} onClick={calculateBmr}>คำนวณ BMR</button>
        
        <Link to="/CustomerKey"className={styles.link}> {/* Changed the route for the "No" response */}
          <button className={styles.nextbutton}>ถัดไป</button> 
            </Link>
        
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
  };

  return <div>{renderContent()}</div>;
}

export default BMR_calculator;