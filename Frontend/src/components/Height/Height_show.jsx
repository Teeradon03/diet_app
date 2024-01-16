import React, { useState } from 'react';
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import styles from '../Bmi/Bmi.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Height_show(props) {
  const [height, setHeight] = useState('');
  const questionId = '44';

  const handleInputChange = (e) => {
    const value = e.target.value;
    setHeight(value);
  };

  const handleNextClick = () => {
    if (height.trim() === '') {
      alert('กรุณากรอกส่วนสูงของคุณ');
    } else {
      console.log('Height:', height);
      handleSubmit(); // Call the handleSubmit function to send data to the server
      window.location.href = '/Target';
    }
  };

  const handleSubmit = async () => {
    console.log('Height:', height);

    const dataToSend = {
      questionId: questionId,
      height: height,
    };

    try {
      await axios.post('http://localhost:9999/api/create-questionnaires', dataToSend, { witCredentials: true });
      console.log('Data sent successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.Bmi1}>
      <p>ส่วนสูงของคุณเท่าไหร่</p>
      <br />
      <div className={styles.inputlabel}>
        <input
          type="number"
          value={height}
          onChange={handleInputChange}
        />
        <label htmlFor="height">&nbsp; ซม.</label>
      </div>
      <br />

      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 100 ซม. ถึง 300 ซม.</p>

      <Image
        width={300}
        height={300}
        src="/public/h1.jpg"
      />
      <div>
        <button className={styles.nextbutton} onClick={handleNextClick}>
          ถัดไป
        </button>
      </div>
      <Link to="/Weight_show">
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

export default Height_show;
