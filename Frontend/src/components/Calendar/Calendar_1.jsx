import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { VscChevronLeft } from 'react-icons/vsc';
import axios from 'axios';
import styles from '../Bmi/Bmi.module.css';
import './calendar.css';

function Calendar_1() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    if (newDate !== null) {
      setDate(newDate);
      console.log('Selected date:', newDate);
    }
  };

  const handleSubmit = async () => {
    const dataToSend = {
      calendar: date,
    };
  
    try {
      const response = await axios.post('http://localhost:9999/api/form/create-questionnaires', dataToSend, { withCredentials: true });
      console.log(response.data);
    } catch (error) {
      logThaiMessage('เกิดข้อผิดพลาด: ' + error.message);
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="Calendar">
        <h1 className={styles.Bmi1}>วัน/เดือน/ปีเกิด</h1>
        <br />
        <div className="calendar-container">
          <Calendar onChange={onChange} value={value} />
        </div>
        <p className="text-center">
          <br />
          <br />
          <h1 className={styles.Bmi1}>วันที่คุณเลือก </h1>
          
          <h4 className={styles.Bmi1}>{date.toDateString()}</h4>
        </p>
      </header>
      <br />
      <Link to="/Weight_show" className={styles.link}>
        <button className={styles.nextbutton} onClick={handleSubmit}>
          ถัดไป
        </button>
      </Link>
      <div className={styles.chevronicon}>
        <Link to="/Yesno">
          <Button
            shape="circle"
            icon={<VscChevronLeft />}
          />
        </Link>
      </div>
    </div>
  );
}

export default Calendar_1;