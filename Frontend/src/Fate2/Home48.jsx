import React, { useState } from 'react';
import { Card } from 'antd';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import Chart from './Chart/Chart';
import "./Home48.css";
import "./Chart/Chart.css";

const dates = [
  { id: 56, question: "1" },
  { id: 57, question: "2" },
  { id: 58, question: "3" },
  { id: 59, question: "4" },
  { id: 60, question: "5" },
  { id: 61, question: "6" },
  { id: 62, question: "7" },
  { id: 63, question: "8" },
  { id: 64, question: "9" },
  { id: 65, question: "10" },
  { id: 66, question: "11" },
  { id: 67, question: "12" },
  { id: 68, question: "13" },
  { id: 69, question: "14" },
  { id: 70, question: "15" },
  { id: 71, question: "16" },
  { id: 72, question: "17" },
  { id: 73, question: "18" },
  { id: 74, question: "19" },
  { id: 75, question: "20" },
  { id: 76, question: "21" },
  { id: 77, question: "22" },
  { id: 78, question: "23" },
  { id: 79, question: "24" },
  { id: 80, question: "25" },
  { id: 81, question: "26" },
  { id: 82, question: "27" },
  { id: 83, question: "28" },
  { id: 84, question: "29" },
  { id: 85, question: "30" },
];

const Home48 = () => {
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
      <div >
        <p className='text48'>โปรแกรมลดน้ำหนัก</p>
        <Card className='Card'>
          <div className="chart-container">
            <Chart />
          </div>
        </Card>
        <Card className='Card2'>
          <div className="chart2">
            <Card className='exercise'>
              <img className='img' src='/public/exercise.png' alt='Exercise' />
            </Card>
            <Card className='target'>
              <img className='img' src='/public/target.png' alt='Target' />
            </Card>
            <Card className='video'>
              <img className='img' src='/public/video.png' alt='Video' />
            </Card>
            <p className='text-exercise'>ออกกำลังกาย</p>
            <p className='text-target'>เป้าหมาย</p>
            <p className='text-video'>คลิปวิดีโอ</p>
          </div>
        </Card>
        <Card className='Card3'>
          <div className="chart3">
              <VscChevronLeft className='iconleft' onClick={handleLeftArrowClick} />
              <div className='date'>
              {visibleDates.map((date) => (
                <Card key={date.id} className={`date${date.id}`}>
                  <p className='test'>{date.question}</p>
                </Card>
              ))}
              </div>
              <VscChevronRight className='iconright' onClick={handleRightArrowClick} />
          </div>
        </Card>
        <p className='text-food'> การลดน้ำหนักทั่วไป (อาหาร)</p>
        <Card className='Card4'>
          <div className="chart4">
            <Card className='date-food'>
              <p> วันที่ </p>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home48;
