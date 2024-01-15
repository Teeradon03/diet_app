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

  const handleSubmit = async () => {
    console.log('Height:', height);

    const dataToSend = {
      questionId: questionId,
      height: height,
    };

    await axios.post('http://localhost:9999/api/create-questionnaires', dataToSend, {dataToSend,witCredentials:true})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.Bmi1}>
      <p >ส่วนสูงของคุณเท่าไหร่</p>
      <br />
      <div className={styles.inputlabel}>
        <input
          type="number"
          value={height}
          onChange={handleInputChange}
        />
        <label htmlFor="height" >&nbsp; ซม.</label>
      </div>
      <br />

      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 100 ซม. ถึง 300 ซม.</p>

      <Image
        width={300}
        height={300}
        src="/public/h1.jpg"
      />
      <div>
        <Link to="/Weight_show"className={styles.link}>
          <button className={styles.nextbutton} onClick={handleSubmit}>
            ถัดไป
          </button>
        </Link>
      </div>
      <div className={styles.chevronicon}>
        <Link to="/Target">
          <Button
            shape="circle"
            style={{ left: 10, top: 10, fontSize: '22px', width: '50px', height: '50px' }}
            icon={<VscChevronLeft />}
          />
        </Link>
      </div>
    </div>
  );
}

export default Height_show;
