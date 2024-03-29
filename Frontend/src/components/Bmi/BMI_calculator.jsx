import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { VscChevronLeft } from "react-icons/vsc";
import styles from "../Bmi/Bmi.module.css";
import Weight from "../Weight/Weight";
import Height from "../Height/Height";
import axios from "axios";

function BMI_calculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const calculateBmi = async () => {
    const calculatedBmi = weight / ((height / 100) * (height / 100));
    // console.log("BMI:", calculatedBmi);
    setBmi(calculatedBmi);
    determinePage(calculatedBmi);

    const dataToSend = {
      bmi: calculatedBmi,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_URL_API}/api/user/update-user-data`,
      dataToSend,
      { withCredentials: true }
    );
  };

  const determinePage = (calculatedBmi) => {
    if (calculatedBmi < 18.5) {
      navigate("/Bmi_lowweight");
    } else if (calculatedBmi <= 22.9) {
      navigate("/Bmi_normalweight");
    } else if (calculatedBmi <= 24.9) {
      navigate("/Bmi_obesitylevel1");
    } else if (calculatedBmi <= 29.9) {
      navigate("/Bmi_obesitylevel2");
    } else if (calculatedBmi >= 29.9) {
      navigate("/Bmi_obesitylevel3");
    }
  };

  const renderContent = () => {
    return (
      <div className={styles.Bmi1}>
        <br />
        <h1 className={styles.Bmi1}>คำนวณค่าดัชนีมวลกาย (BMI)</h1>
        <Weight onWeightChange={(value) => setWeight(value)} />
        <Height onHeightChange={(value) => setHeight(value)} />
        <button className={styles.bmibutton} onClick={calculateBmi}>
          คำนวณ BMI
        </button>

        <Link to="/Target">
          <button className={styles.chevronicon}>
            <VscChevronLeft />
          </button>
        </Link>
      </div>
    );
  };

  const checkBmiResult = (bmiValue) => {
    if (bmiValue === 0) return "-";
    if (bmiValue < 18.5) return "อยู่ในเกณฑ์น้ำหนักน้อย / ผอม";
    if (bmiValue < 22.9) return "อยู่ในเกณฑ์ปกติ (สุขภาพดี)";
    if (bmiValue < 24.9) return "อยู่ในเกณฑ์ท้วม / โรคอ้วนระดับ 1";
    if (bmiValue < 29.9) return "อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 2";
    if (bmiValue >= 29.9) return "อยู่ในเกณฑ์อ้วนมาก / โรคอ้วนระดับ 3";
  };


  return <div>{renderContent()}</div>;
}

export default BMI_calculator;
