import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from'../Bmi/Bmi.module.css'
import Weight from '../Weight/Weight';
import Height from '../Height/Height';
import Bmi_lowweight from '../Bmi/Bmi_lowweight';
import Bmi_normalweight from '../Bmi/Bmi_normalweight';
import Bmi_obesitylevel1 from '../Bmi/Bmi_obesitylevel1';
import Bmi_obesitylevel2 from '../Bmi/Bmi_obesitylevel2';
import Bmi_obesitylevel3 from '../Bmi/Bmi_obesitylevel3';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function BMI_calculator(props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [questionId, setUserId] = useState('46');

  const calculateBmi = async() => {
    const calculatedBmi = weight / ((height / 100) * (height / 100));
    setBmi(calculatedBmi);
    determinePage(calculatedBmi);
    console.log("BMI:", calculatedBmi);

    const dataToSend = {
      questionId: questionId,
      bmi: calculatedBmi,
    };
    await axios.post('http://localhost:9999/api/create-questionnaires', {dataToSend,witCredentials:true})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const determinePage = (calculatedBmi) => {
    if (calculatedBmi < 18.5) {
      setCurrentPage(1);
    } else if (calculatedBmi < 22.9) {
      setCurrentPage(2);
    } else if (calculatedBmi < 24.9) {
      setCurrentPage(3);
    } else if (calculatedBmi < 29.9) {
      setCurrentPage(4);
    } else if (calculatedBmi >= 29.9) {
      setCurrentPage(5);
    } else {
      setCurrentPage(0); 
    }
  };

  const RenderBmiComponent = ({ bmiValue }) => {
    switch (currentPage) {
      case 1:
        return <Bmi_lowweight bmiValue={bmiValue} />;
      case 2:
        return <Bmi_normalweight bmiValue={bmiValue} />;
      case 3:
        return <Bmi_obesitylevel1 bmiValue={bmiValue} />;
      case 4:
        return <Bmi_obesitylevel2 bmiValue={bmiValue} />;
      case 5:
        return <Bmi_obesitylevel3 bmiValue={bmiValue} />;
      default:
        return (
          <div>
            <Weight onWeightChange={(value) => setWeight(value)} />
            <br/>
            <Height onHeightChange={(value) => setHeight(value)} />
            <button className={styles.bmibutton} onClick={calculateBmi} >คำนวณ BMI</button>
          </div>
        );
    }
  };
  
  const renderContent = () => {
    if (currentPage >= 1 && currentPage <= 5) {
      return <RenderBmiComponent bmiValue={bmi.toFixed(1)} />;
    } else {
      return (
      
        <div className={styles.Bmi1}>
          <br />
            <p>คำนวณค่าดัชนีมวลกาย (BMI)</p>
          <Weight onWeightChange={(value) => setWeight(value)} />
          <br />
          <Height onHeightChange={(value) => setHeight(value)} />
          <button className={styles.bmibutton} onClick={calculateBmi}>คำนวณ BMI</button>
         
          <div className={styles.chevronicon}>
          <Link to="/Weight_show">
            <Button
              shape="circle"
              style={{ left: 10, top: 10, fontSize:'22px', width: '50px', height: '50px'  }}
              icon={<VscChevronLeft />}
            />
          </Link>
        </div>
          
        </div>
        
      );
      
    }
    
  };
  

  const checkBmiResult = (bmiValue) => {
    if (bmiValue === 0) return '-';
    if (bmiValue < 18.5) return 'อยู่ในเกณฑ์น้ำหนักน้อย / ผอม';
    if (bmiValue < 22.9) return 'อยู่ในเกณฑ์ปกติ (สุขภาพดี)';
    if (bmiValue < 24.9) return 'อยู่ในเกณฑ์ท้วม / โรคอ้วนระดับ 1'
    if (bmiValue < 29.9) return 'อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 2'
    if (bmiValue >= 29.9) return 'อยู่ในเกณฑ์อ้วนมาก / โรคอ้วนระดับ 3'
  };

  const Page1 = () => <div>Content for BMI less than 18.5</div>;
  const Page2 = () => <div>Content for BMI between 18.5 and 22.9</div>;
  const Page3 = () => <div>Content for BMI between 23 and 24.9</div>;
  const Page4 = () => <div>Content for BMI between 25 and 29.9</div>;
  const Page5 = () => <div>Content for BMI greater than 30</div>;

  return <div>{renderContent()}</div>;
}

export default BMI_calculator;