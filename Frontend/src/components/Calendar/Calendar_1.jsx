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
  const navi = useNavigate();
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    if (newDate !== null) {
      setDate(newDate);
      console.log("Selected date:", newDate); // Log the selected date
    }
  };

  const handleNext = () => {
    navi('/Weight_1');
  };

  const handleBack = () => {
    window.location.href = "Yesno"; // ทำการย้อนกลับไปที่หน้าที่แล้ว
  };

  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };

  return (
    <div className="App">
      <header className="Calendar">
        <h1 className={styles.Bmi1} style={buttonStyle} >วัน/เดือน/ปีเกิด</h1>
        <br />
        <div className='calendar-container'>
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <p className="text-center">
        <br/><br/>
          <span className="bold" style={buttonStyle}>กรุณาเลือกวันที่ </span>
          &nbsp;&nbsp;&nbsp;
          <span className="bold" style={buttonStyle}>{date.toDateString()}</span>
        </p>
      </header>
      <br/>
      <Link to="/Target"> {/* Changed the route for the "No" response */}
            <button className={styles.nextbutton}style={buttonStyle}>ถัดไป</button> 
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