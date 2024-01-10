import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import './calendar.css'
import styles from '../Bmi/Bmi.module.css';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom'
import { Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import axios from 'axios';

function Calendar_1() {
  const navi = useNavigate();
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    if (newDate !== null) {
      setDate(newDate);
      console.log("Selected date:", newDate); // Log the selected date
    }
  };

  const handleNext = async () => {
    // Assuming you have an ID value you want to send (replace 'yourId' with the actual ID)
    const  questionId = '31';

    // Prepare the data to be sent
    const dataToSend = {
      questionId:  questionId,
      selectedDate: date,
    };

    // Send the data to the server
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
        <h1 className={styles.Bmi1}>วัน/เดือน/ปีเกิด</h1>
        <br/>
        <div className='calendar-container'>
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <p className="text-center">
          <span className="bold">กรุณาเลือกวันที่ </span> {date.toDateString()}
        </p>
      </header>
      <br/>
      <Link to="/Target">
        <button className={styles.nextbutton} onClick={handleNext}>
          ถัดไป
        </button>
      </Link>
      <div className={styles.chevronicon}>
        <Link to="/yesno_30">
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
