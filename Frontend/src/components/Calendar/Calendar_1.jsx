import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import './calendar.css'
import styles from '../Bmi/Bmi.module.css';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";

function Calendar_1() {
  const [date, setDate] = useState(new Date());
 const [questionId, setUserId] = useState('42');
  const handleDateChange = (newDate) => {
    if (newDate !== null) {
      setDate(newDate);
      console.log("Selected date:", newDate); // บันทึกวันที่ที่เลือกไว้
    }
    
  };
  const handleSubmit = async () => {
    console.log('Weight:', weight);

    const dataToSend = {
      questionId: pageId, // เพิ่ม ID ลงในข้อมูลที่จะส่ง
      weight: weight
    };

    await axios.post('http://localhost:9999/api/create-questionnaires', dataToSend)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  

  return (
    <div className="App">
      <header className="Calendar">
        <h1 className={styles.Bmi1} >วัน/เดือน/ปีเกิด</h1>
        <br />
        <div className='calendar-container' >
          {/* Adjust the width and height as needed */}
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <p className="text-center ">
          <br/><br/>
          <span >กรุณาเลือกวันที่ </span>
          &nbsp;&nbsp;&nbsp;
          <span >{date.toDateString()}</span>
        </p>
      </header>
      <br/>
      <Link to="/Target"className={styles.link}>
        <button className={styles.nextbutton}>ถัดไป</button>
      </Link>
      <div className={styles.chevronicon}>
        <Link to="/Yesno">
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

export default Calendar_1;
