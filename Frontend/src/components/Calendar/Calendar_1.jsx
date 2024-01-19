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
    const year = date.getFullYear() + 543; // แปลงปี ค.ศ. เป็น พ.ศ.

    return `${day} ${month} ${year}`;
  };

  const logThaiMessage = (message) => {
  const formattedDate = new Date().toLocaleDateString('th-TH');  // ใช้ toLocaleDateString เพื่อให้ได้วันที่และเดือนเท่านั้น
  console.log(`${message} วันที่ ${formattedDate}`);
};


  const handleSubmit = async () => {
    const dataToSend = {
      calendar: date,
    };
  
    try {
      const response = await axios.post('http://localhost:9999/api/user/update-user-data', dataToSend, { withCredentials: true });
      logThaiMessage('การส่งข้อมูลเสร็จสิ้น');
      // เพิ่มตรงนี้: นำคุณสมบัติการนำทางไปยังหน้าถัดไปได้ตามที่คุณต้องการ
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
            locale="th-TH" // ตั้งค่า locale เป็นภาษาไทย
          />
        </div>
        <p className="text-center">
          <br />
          <br />
          <span>กรุณาเลือกวันที่ </span>
          &nbsp;&nbsp;&nbsp;
          <span>{formatThaiDate(date)}</span>
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
          onClick={() => window.location.href = "Yesno"}>
          <VscChevronLeft />
        </button>
      </Link>
    </div>
  );
}

export default Calendar_1;
