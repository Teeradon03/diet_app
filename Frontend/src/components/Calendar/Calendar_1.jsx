import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { VscChevronLeft } from 'react-icons/vsc';
import axios from 'axios';

import styles from '../Bmi/Bmi.module.css';
import './calendar.css';

function Calendar_1() {
  const [date, setDate] = useState(new Date());
  const [questionId, setQuestionId] = useState('');  // State to hold the question ID

  const generateQuestionId = () => {
    // You can use any logic to generate a unique ID, for example, a timestamp
    const newQuestionId = Date.now().toString();
    setQuestionId(newQuestionId);
  };

  const handleDateChange = (newDate) => {
    if (newDate !== null) {
      setDate(newDate);
      console.log('Selected date:', newDate);
    }
  };

  const handleSubmit = async () => {
    generateQuestionId();  // Generate the question ID before making the request
  
    const dataToSend = {
      calendar: date,
    };
  
    try {
      const response = await axios.post('http://localhost:9999/api/user/update-user-data', dataToSend, { withCredentials: true });
      console.log(response.data);
      // Add your logic for navigating to the next page here if needed
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="App">
      <header className="Calendar">
        <h1 className={styles.Bmi1}>วัน/เดือน/ปีเกิด</h1>
        <br />
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <p className="text-center">
          <br />
          <br />
          <span>กรุณาเลือกวันที่ </span>
          &nbsp;&nbsp;&nbsp;
          <span>{date.toDateString()}</span>
        </p>
      </header>
      <br />
      <Link to="/Weight_show" className={styles.link}>
        <button className={styles.nextbutton} onClick={handleSubmit}>
          ถัดไป
        </button>
      </Link>
      
    <Link to="/Yesno">
        <button 
        className={styles.chevronicon} 
        onClick={() => window.location.href = "Yesno"()}>
          <VscChevronLeft />
        </button>
      </Link>
    </div>
  );
}

export default Calendar_1;
