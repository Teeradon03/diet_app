import React, { useState } from 'react';
import { Card } from 'antd';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import Chart from './Chart/Chart';
import "./Home48.css";
import "./Chart/Chart.css";
import { Link } from 'react-router-dom';




const Home48 = () => {
  const dates = Array.from({ length: 31 }, (_, index) => index + 1);
  const [visibleDates, setVisibleDates] = useState(dates.slice(0, 5));
  const [startIndex, setStartIndex] = useState(0);

  const handleRightArrowClick = () => {
    if (startIndex + 5 < dates.length) {
      setStartIndex(startIndex + 1);
      setVisibleDates(dates.slice(startIndex + 1, startIndex + 6));
    }
  };

  const handleLeftArrowClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setVisibleDates(dates.slice(startIndex - 1, startIndex + 4));
    }
  };

  return (
    <div className='font-family'>
      <div>
        <p className='text48'>โปรแกรมลดน้ำหนัก</p>
        <Card className='Card'>
          <div className="chart-container">
            <Chart />
          </div>
        </Card>
        <Card className='Card2'>
          <div className="chart2">
            <button className='exercise'>
              <img className='img' src='/public/exercise.png' alt='Exercise' />
            </button>

            <Link to="/Target15">
              <button className='target'>
                <img className='img' src='/public/target.png' alt='Target' />
              </button>
            </Link>

            <button className='video'>
              <img className='img' src='/public/video.png' alt='Video' />
            </button>
            <p className='text-exercise'>ออกกำลังกาย</p>
            <p className='text-target'>เป้าหมาย</p>
            <p className='text-video'>คลิปวิดีโอ</p>
          </div>
        </Card>
        <Card className='Card3'>
          <div className="chart3">
            <VscChevronLeft className='iconleft' onClick={handleLeftArrowClick} />
            <div className="date-container">
              <Card className='date1'>
              {visibleDates[0]}
              </Card>
              <Card className='date2'>
              {visibleDates[1]}
              </Card>
              <Card className='date3'>
              {visibleDates[2]}
              </Card>
              <Card className='date4'>
              {visibleDates[3]}
              </Card>
              <Card className='date5'>
              {visibleDates[4]}
              </Card>
            </div>
            <VscChevronRight className='iconright' onClick={handleRightArrowClick} />
          </div>
        </Card>
        <p className='text-food'> การลดน้ำหนักทั่วไป (อาหาร)</p>

        <Link to='Program_IF'>
        <Card className='Card4'>
          <div className="chart4">
            <Card className='date-food'>
              <p className='text-time'> วันที่ </p>
            </Card>

            <Card className='time-food'>
              <p className='text-time'> 08:00 น.</p>
            </Card><Card className='time-food'>
              <p className='text-time'> 12:00 น.</p>
            </Card><Card className='time-food'>
              <p className='text-time'> 14:00 น.</p>
            </Card><Card className='time-food'>
              <p className='text-time'> 15:00 น.</p>
            </Card>
          </div>
        </Card>
        </Link>
      </div>
    </div>
  );
}

export default Home48;
