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
      logThaiMessage('เลือกวันที่:', newDate);
    }
  };

  const formatThaiDate = (date) => {
    const thaiMonthNames = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
      'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
      'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',
    ];

    const day = date.getDate();
    const month = thaiMonthNames[date.getMonth()];
    const year = date.getFullYear() + 543;

    return `${day} ${month} ${year}`;
  };

  const logThaiMessage = (message, selectedDate) => {
    const formattedDate = selectedDate ? formatThaiDate(selectedDate) : "";
    console.log(`${message} ${formattedDate}`);
  };

  const handleSubmit = async () => {
    const dataToSend = {
      dateOfBirth: date,
    };

    try {
      const response = await axios.post('http://localhost:9999/api/user/update-user-data', dataToSend, { withCredentials: true });
      logThaiMessage('การส่งข้อมูลเสร็จสิ้น');
      console.log('Server response:', response.data);
      // Add navigation to the next page here if needed
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
          <Calendar 
            onChange={handleDateChange} 
            value={date} 
            locale="th-TH"
          />
        </div>
        <div className="text-center">
          <br />
          <br />
          <p>กรุณาเลือกวันที่ </p>
          &nbsp;&nbsp;&nbsp;
          <span>{formatThaiDate(date)}</span>
        </div>
      </header>
      <br />
      <Link to="/Weight_show" className={styles.link}>
        <button className={styles.nextbutton} onClick={handleSubmit}>
          ถัดไป
        </button>
      </Link>
      
      <Link to="/Yesno" className={styles.link}>
        <button className={styles.chevronicon}>
          <VscChevronLeft />
        </button>
      </Link>
    </div>
  );
}

export default Calendar_1;