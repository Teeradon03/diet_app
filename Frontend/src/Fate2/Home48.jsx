import React from 'react';
import { Card } from 'antd';
import Chart from './Chart/Chart'
import "./Home48.css"
import "./Chart/Chart.css"


const Home48 = () => (
    <div className='font-family'>
        <div className='text48'>
            <p> โปรแกรมลดน้ำหนัก</p>
                <Card className='Card'>
                        <div className="chart-container">
                            <Chart />
                    </div>
                </Card>
                <Card className='Card2'>
                        <div className="chart2">
                            
                    </div>
                </Card>
            </div>
        </div>

);
export default Home48;