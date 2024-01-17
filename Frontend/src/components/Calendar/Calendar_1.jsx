import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { VscChevronLeft } from 'react-icons/vsc';
import axios from 'axios';

import styles from '../Bmi/Bmi.module.css';
import './calendar.css';

function Calendar_1() {

  const [value, onChange] = useState(new Date());

  const handleSubmit = async () => {
  
    // console.log('valueee :', value)

    const utcDate = value.toUTCString();
    // console.log('utcDate :', utcDate)
    const data = {
      dateOfBirth : utcDate
    }
    try {
      const response = await axios.post('http://localhost:9999/api/user/update-user-data', data, { withCredentials: true });
      console.log('response data from server',response.data);
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
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="text-center">
          <br />
          <br />
          <h1 className={styles.Bmi1}>วันที่คุณเลือก </h1>
          
          <h4 className={styles.Bmi1}>{value.toDateString()}</h4>
        </div>
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
          className={styles.button}
          shape="circle"
          icon={<VscChevronLeft />}
        />
        </Link>
      </div>
    </div>
  );
}

export default Calendar_1;