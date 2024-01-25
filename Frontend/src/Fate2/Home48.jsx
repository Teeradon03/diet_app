import React from 'react';
import { Card } from 'antd';
import Chart from './Chart/Chart';
import "./Home48.css";
import "./Chart/Chart.css";




const Home48 = () => (
  <div className='font-family'>
    <div className='text48'>
      <p>โปรแกรมลดน้ำหนัก</p>
      <Card className='Card'>
        <div className="chart-container">
          <Chart />
        </div>
      </Card>
      <Card className='Card2'>
        <div className="chart2">
          <Card className='exercise'>
            <img className='img' src='/public/exercise.png' />
          </Card>
          <Card className='target'>
          <img className='img' src='/public/target.png' />
          </Card>
          <Card className='video'>
          <img className='img' src='/public/video.png' />
          </Card>
          <p className='text-exercise'>ออกกำลังกาย</p>
          <p className='text-target'>เป้าหมาย</p>
          <p className='text-video'>คลิปวิดีโอ</p>
        </div>
      </Card>
      <Card className='Card3'>
        <div className="chart3">
          <Card className='date'>
          <p> 1 </p>
          </Card>
        </div>
      </Card>
    </div>
  </div>
);

export default Home48;
